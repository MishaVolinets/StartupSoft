using System.Web;
using System.Web.Optimization;

namespace StartupSoft
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-2.2.0.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.min.js",
                      "~/Scripts/respond.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/main").Include(
                    "~/Scripts/animations.js",
                    "~/Scripts/checkLength.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular.min.js",
                "~/Scripts/angular-ui-router.min.js",
                "~/Scripts/ngprogress.js",
                "~/Scripts/angular-messages.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/angular-comp").Include(
                    "~/app/app.js",
                    "~/app/Home/home.js",
                    "~/app/Home/homeComponents.js",
                    "~/app/Home/homeDirectives.js",
                    "~/app/About/about.js",
                    "~/app/About/aboutComponents.js",
                    "~/app/Faq/faq.js",
                    "~/app/Faq/faqComponents.js",
                    "~/app/Contact/contact.js",
                    "~/app/Contact/contactComponents.js",
                    "~/app/layout/footerComponent.js",
                    "~/app/layout/loadingComponent.js",
                    "~/app/layout/layoutComponents.js",
                    "~/app/common/controllers.js",
                    "~/app/common/directives.js",
                    "~/app/common/services.js"
                ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.min.css",
                       "~/Content/styles_sass/about_us.min.css",
                       "~/Content/styles_sass/contact-us.min.css",
                       "~/Content/styles_sass/faq.min.css",
                       "~/Content/styles_sass/forms.min.css",
                       "~/Content/styles_sass/icon-fonts.min.css",
                       "~/Content/styles_sass/standart-style.min.css",
                       "~/Content/styles_sass/style.min.css",
                       "~/Content/styles_sass/modal.min.css",
                       "~/Content/styles_sass/testemonials.min.css",
                       "~/Content/styles_sass/white_header.min.css",
                       "~/Content/styles_sass/media-style.min.css",
                       "~/Content/ngProgress.css",
                       "~/Content/styles_sass/animate.css",
                       "~/Content/loadingComponent.css")
                       );
        }
    }
}
