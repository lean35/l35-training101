using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(angularJSASP.Startup))]
namespace angularJSASP
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
