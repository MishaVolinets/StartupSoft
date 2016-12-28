using StartupSoft.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;

namespace StartupSoft.Controllers
{
    public class CallBackController : Controller
    {
        // GET: CallBack
        public ActionResult Index()
        {
            ViewBag.showFooter = "";
            return View();
        }
        public ActionResult StepTwo(EmailModel model) {
            ViewBag.showFooter = "";
            if (String.IsNullOrWhiteSpace(model.Email))
                return Redirect("/callback");

            return View(model);
        }

    }
}