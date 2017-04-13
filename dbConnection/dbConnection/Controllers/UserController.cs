using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using dbConnection.Models;

namespace dbConnection.Controllers
{
    public class UserController : ApiController
    {

        private User_databseEntities db_context = new User_databseEntities();

        // GET api/user
        public IEnumerable<Users> Get() {

            //Users user_instance = new Users();
            //user_instance.Id = 2;
            //user_instance.Name = "First";
            //user_instance.LastName = "LASt";



            //db_context.Users.Add(user_instance);
            //db_context.SaveChanges();

            return  db_context.Users.AsEnumerable();
        }

        // POST: api/user
        public void Post(Users sub)
        {
            Console.Write(sub);
            if (ModelState.IsValid)
            {
                db_context.Users.Add(sub);
                db_context.SaveChanges();
            }
        }

        // PUT: api/user/5  
        public void Put(Users sub)
        {
            if (ModelState.IsValid)
            {
                db_context.Entry(sub).State = EntityState.Modified;
                try
                {
                    db_context.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }


        // DELETE: api/User/5  
        public void Delete(int id)
        {
            Users dlt = db_context.Users.Find(id);
            if (dlt != null)
            {
                try
                {
                    db_context.Users.Remove(dlt);
                    db_context.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }

    }
}
