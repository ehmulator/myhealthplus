using System;
using System.Collections.Generic;

namespace WebApplication1.Models
{
    public partial class UserGroup
    {
        public UserGroup()
        {
            User = new HashSet<User>();
        }

        public int Id { get; set; }
        public string UserGroupName { get; set; }

        public ICollection<User> User { get; set; }
    }
}
