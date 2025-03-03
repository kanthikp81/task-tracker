/*implement user authentication mechanism to authenticate user based
on user role (Admin, SuperAdmin, Normal User). Can you please help me to implement this
mechanism using Runtime Polymorphism in C#?*/

using System;

namespace AuthenticationExample
{
    // Base class
    public abstract class User
    {
        public string Username { get; set; }
        public string Password { get; set; }

        public User(string username, string password)
        {
            Username = username;
            Password = password;
        }

        public abstract void Authenticate();
    }

    // Derived class for Admin
    public class Admin : User
    {
        public Admin(string username, string password) : base(username, password) { }

        public override void Authenticate()
        {
            Console.WriteLine("Authenticating Admin user...");
            // Add authentication logic for Admin
        }
    }

    // Derived class for SuperAdmin
    public class SuperAdmin : User
    {
        public SuperAdmin(string username, string password) : base(username, password) { }

        public override void Authenticate()
        {
            Console.WriteLine("Authenticating SuperAdmin user...");
            // Add authentication logic for SuperAdmin
        }
    }

    // Derived class for Normal User
    public class NormalUser : User
    {
        public NormalUser(string username, string password) : base(username, password) { }

        public override void Authenticate()
        {
            Console.WriteLine("Authenticating Normal user...");
            // Add authentication logic for Normal User
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            User admin = new Admin("adminUser", "adminPass");
            User superAdmin = new SuperAdmin("superAdminUser", "superAdminPass");
            User normalUser = new NormalUser("normalUser", "normalPass");

            admin.Authenticate();
            superAdmin.Authenticate();
            normalUser.Authenticate();
        }
    }
}