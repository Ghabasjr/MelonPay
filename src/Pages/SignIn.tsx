/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; // Use signInWithEmailAndPassword for sign in
import { auth } from "../Context/config/Firebase";
import Button from "../Components/Button/Button";
import Inputs from "../Components/Inputs/Inputs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password); // Use signInWithEmailAndPassword
      console.log("User signed in:", userCredential.user);
      toast.success("Signed in successfully");
      navigate("/dashboard"); // Redirect to dashboard after successful sign in
    } catch (error: any) {
      setError(error.message);
      console.error("Error signing in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-8 bg-[#f1f2f3]">
        {/* Left Side - Full Width Section */}
        <div className="hidden md:flex flex-col items-center justify-center w-2/3 p-12 bg-green-700 h-screen rounded-lg text-white text-center">
          <h1 className="text-4xl font-bold">Welcome to MelonPay</h1>
          <p className="mt-4 text-lg">Your trusted platform for managing finances efficiently.</p>
          <img
            src="/Images/MelonPay image.webp"
            alt="MelonPay"
            className="w-60 md:w-80 h-auto mt-6"
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

          {/* Form Title */}
          <h1 className="text-green-700 text-lg md:text-xl font-bold">
            Sign In
          </h1>

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
              <a href="/signup" className="text-green-600">
                Sign Up
              </a>
            </p>
            <div>
              <a href="forgotpassword" className="text-green-600">Forgot Password</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
