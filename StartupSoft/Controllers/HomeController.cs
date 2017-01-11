using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StartupSoft.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            if (Request.IsAjaxRequest())
                return PartialView();
            else
                return View("~/Views/Shared/loading.cshtml");
        }
    }
}