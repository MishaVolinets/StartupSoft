using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace StartupSoft
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapMvcAttributeRoutes();

            routes.MapRoute(
            name: "Callback",
            url: "callback",
            defaults: new { controller = "Home", action = "Index" }
            );

              routes.MapRoute(
              name: "Network",
              url: "network",
              defaults: new { controller = "Home", action = "Index" }
              );

               routes.MapRoute(
                name: "Result",
                url: "result",
                defaults: new { controller = "Home", action = "Index" }
                );

            routes.MapRoute(
                name: "Contact",
                url: "contact",
                defaults: new { controller = "Home", action = "Index" }
                );

            routes.MapRoute(
                name: "About",
                url: "about",
                defaults: new { controller = "Home", action = "Index" }
            );

            routes.MapRoute(
                name: "Faq",
                url: "faq",
                defaults: new { controller = "Home", action = "Index" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
