using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.DataAccess;
using WebApplication1.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        UserDataAccessLayer userObj = new UserDataAccessLayer();

        [HttpGet]
        [Route("GetAllUsers")]
        public IEnumerable<User> GetUsers()
        {
            return userObj.GetUsers();
        }


        [HttpGet]
        [Route("Details/{id}")]
        public User Details(int id)
        {

            var user = userObj.GetUserData(id);
            return user;
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] User user)
        {
            return userObj.AddUser(user);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody]User user)
        {
            return userObj.UpdateUser(user);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return userObj.DeleteUser(id);
        }

        [HttpGet]
        [Route("GetAllUserGroups")]
        public IEnumerable<UserGroup> GetUserGroups()
        {
            return userObj.GetUserGroups();
        }

        [HttpGet]
        [Route("Login")]
        public void Login()
        {

        }
    }
}
