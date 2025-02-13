/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Context/config/Firebase";
import Button from "../Components/Button/Button";
import Inputs from "../Components/Inputs/Inputs";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // console.log("user register", email, password);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User signed in:", userCredential.user);
    } catch (error: any) {
      setError(error.message);
      console.error("Error signing in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-8 bg-[#f1f2f3] mr-6">
      {/* Left Side - Image (Hidden on small screens) */}
      <div className="hidden md:flex items-center justify-center w-1/3 p-6 bg-green-700 h-screen rounded ">
        <img
          src="/Images/MelonPay image.webp"
          alt="MelonPay"
          className="w-40 md:w-60 h-auto"
        />
      </div>

      {/* Right Side - Sign In Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-white p-6 md:p-8 shadow-md rounded-lg h-screen w-full max-w-md"
      >
        {/* Logo & Title */}
        <div className="flex items-center space-x-2">
          <img
            src="/Images/MelonPay logo.webp"
            alt="MelonPay Logo"
            className="w-6"
          />
          <h1 className="text-green-700 text-lg md:text-xl font-bold">
            MelonPay
          </h1>
        </div>

        {/* Email Input */}
        <Inputs
          className="border-b-amber-500"
          label="Email"
          name="email"
          value={formData.email}
          placeholder="Enter your Email"
          onChange={handleChange}
        />

        {/* Password Input */}
        <Inputs
          className="border-amber-500"
          label="Password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
        />

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Sign In Button */}
        <Button
          type="submit"
          isLoading={isLoading}
          className="bg-green-700 text-white py-2 md:py-3 rounded-lg"
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>

        {/* Extra Links */}
        <div className="flex flex-col text-center text-sm text-gray-600">
          <p>
            Don't have an account?{" "}
            <a href="/sign-up" className="text-green-600">
              Sign Up
            </a>
          </p>
          <a href="forgotpassword" className="text-green-600">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
