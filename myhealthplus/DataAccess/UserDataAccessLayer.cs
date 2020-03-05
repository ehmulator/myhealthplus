using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.DataAccess
{
    public class UserDataAccessLayer
    {
        MyHealthPlusContext db = new MyHealthPlusContext();

        public IEnumerable<User> GetUsers()
        {
            try
            {
                return db.User.ToList();
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public int AddUser(User user)
        {
            try
            {
                db.User.Add(user);
                db.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public int UpdateUser(User user)
        {
            try
            {
                db.Entry(user).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public User GetUserData(int id)
        {
            try
            {
                User user = db.User.Find(id);
                return user;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public int DeleteUser(int id)
        {
            try
            {
                User user = db.User.Find(id);
                db.User.Remove(user);
                db.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public List<UserGroup> GetUserGroups()
        {
            List<UserGroup> userGroupList = new List<UserGroup>();
            userGroupList = db.UserGroup.ToList();
            return userGroupList;
        }

        public void Login()
        {

        }

    }
}
