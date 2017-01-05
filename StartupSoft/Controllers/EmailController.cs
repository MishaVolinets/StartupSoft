using StartupSoft.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace StartupSoft.Controllers
{
    public class EmailController : Controller
    {
        public ActionResult Send(EmailModel model) {
            if (!String.IsNullOrWhiteSpace(model.FirstName) && !String.IsNullOrWhiteSpace(model.LastName))
                model.Fullname = model.FirstName + " " + model.LastName; 

            var result = validEmail(model);

            sendEmail(model);

            return Redirect("/result");   
        }

        private void sendEmail(EmailModel model)
        {
            var fromAddress = new MailAddress("startupsoftmail@gmail.com", "SS Mail Notifier");
            List<MailAddress> toAdress = new List<MailAddress>();
            toAdress.Add(new MailAddress("vasylykalex@gmail.com"));
            toAdress.Add(new MailAddress("annaalexmelnik@gmail.com "));
            toAdress.Add(new MailAddress("volinetsmisha@gmail.com "));
            const string fromPassword = "qweasdSS";

            string massage = createMassage(model);

            string FullName;
            if (model.Fullname == null)
                FullName = model.FirstName + " " + model.LastName;
            else
                FullName = model.Fullname;

            SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
            smtp.EnableSsl = true;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new NetworkCredential(fromAddress.Address, fromPassword);
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;

            foreach (var to in toAdress)
            {
                using (var message = new MailMessage(fromAddress, to)
                {
                    Subject = "New contact " + FullName,
                    Body = massage,
                    IsBodyHtml = true,
                    BodyEncoding = Encoding.UTF8
                })
                {
                    smtp.Send(message);
                }
            }
        }

        private bool validEmail(EmailModel model)
        {
            if (String.IsNullOrWhiteSpace(model.Email))
                return false;
            if (String.IsNullOrWhiteSpace(model.Fullname))
                return false;
            if (String.IsNullOrWhiteSpace(model.Description))
                return false;

            return true;
        }

        private string createMassage(EmailModel model)
        {
            string msg = "";

            string description = Regex.Replace(model.Description, @"\r\n?|\n", "<br />");

            msg += model.FromApply ? "<h1>Application</h1>" : "<h1>Contact us</h1>";
            msg += "<h1>Full name: </h1>" + model.Fullname;
            msg += "<h1>Email: </h1>" + model.Email;

            if (model.Skype != null)
                msg += "<h1>Skype: </h1>" + model.Skype;

            if (model.ProjectName != null)
                msg += "<h1>Project name: </h1>" + model.ProjectName;

            msg += model.FromApply ? "<h1>Description: </h1>" : "<h1>Question: </h1>";
            msg += description;

            return msg;
        }
    }
}