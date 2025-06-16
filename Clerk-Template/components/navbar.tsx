import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-10">
      <div className="logo font-bold text-xl">Clerk-Template</div>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact us</li>
      </ul>
      <div>
        <SignedOut>
          <SignInButton>
            <button className="bg-green-700 py-2 px-6 rounded-md mr-2">
              SignIn
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-green-700 py-2 px-6 rounded-md mr-2">
              SignUp
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
