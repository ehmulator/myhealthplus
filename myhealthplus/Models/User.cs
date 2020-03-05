using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class User
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public int? UserGroupId { get; set; }

        public UserGroup UserGroup { get; set; }
    }
}
