using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace angularJSASP.Controllers
{
    public class RoutesDemoController : Controller
    {
        // GET: RoutesDemo
        public ActionResult One()
        {
            return View();
        }

        public ActionResult Two(int donuts = 1, string line=null)
        {
            ViewBag.Donuts = donuts;
            ViewBag.Line = "line of text";
            return View();
        }

       
        public ActionResult Three()
        {
            return View();
        }

        public ActionResult Four()
        {
            return View();
        }
    }
}