using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StartupSoft.Models
{
    public class EmailModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Fullname { get; set; }
        public string Email { get; set; }
        public string ProjectName { get; set; }
        public string Description { get; set; }
        public bool FromApply { get; set; }
    }
}