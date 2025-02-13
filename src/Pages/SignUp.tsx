/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Context/config/Firebase";
import Button from "../Components/Button/Button";
import Inputs from "../Components/Inputs/Inputs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        console.log("User registered:", userCredential.user);
        toast.success("User registered successfully!");
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        console.log("User signed in:", userCredential.user);
        toast.success("Signed in successfully!");
      }
    } catch (error: any) {
      setError(error.message);
      console.error("Error:", error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 md:p-8 bg-[#fff] mr-6">
        {/* Left Side - Image (Hidden on small screens) */}
        <div className="hidden md:flex items-center justify-center w-1/2 p-6 bg-green-700 h-[400px] rounded ">
          <img
            src="/Images/MelonPay image.webp"
            alt="MelonPay"
            className="w-40 md:w-60 h-auto"
          />
        </div>

        {/* Right Side - Sign Up / Sign In Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 bg-white p-6 md:p-8 shadow-md rounded-lg w-full max-w-md"
        >
          {/* Logo & Title */}
          <div className="flex items-center space-x-2">
            <img
              src="/Images/MelonPay logo.webp"
              alt="MelonPay Logo"
              className="w-6"
            />
            <h1 className="text-green-700 text-lg md:text-xl font-bold">
              {isRegistering ? "Sign Up" : "Sign In"}
            </h1>
          </div>

          {/* Email Input */}
          <Inputs
            label="Email"
            className="border-green-600"
            name="email"
            value={formData.email}
            placeholder="Enter your Email"
            onChange={handleChange}
          />

          {/* Password Input */}
          <Inputs
            label="Password"
            name="password"
            className="border-y-green-600"
            value={formData.password}
            placeholder="Enter your password"
            type="password"
            onChange={handleChange}
          />

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            isLoading={isLoading}
            className="bg-green-700 text-white py-2 md:py-3 rounded-lg"
          >
            {isLoading
              ? isRegistering
                ? "Registering..."
                : "Signing In..."
              : isRegistering
              ? "Sign Up"
              : "Sign In"}
          </Button>

          {/* Extra Links */}
          <div className="flex flex-col text-center text-sm text-gray-600">
            <p>
              {isRegistering
                ? "Already have an account?"
                : "Don't have an account?"}
              <button
                type="button"
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-green-600 ml-1"
              >
                {isRegistering ? "Sign In" : "Sign Up"}
              </button>
            </p>
            <a href="forgotpassword" className="text-green-600">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
