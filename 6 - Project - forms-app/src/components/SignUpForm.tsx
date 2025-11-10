import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpFormData, signUpSchema } from "../schema/signup-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: SignUpFormData) => {
    setLoading(true);

    console.log("Submitting...", data);

    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulation of API

    setLoading(false);

    alert("Signup has been successful!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto p-6 border rounded shadow"
    >
      <h2 className="text-xl font-bold">Sign Up</h2>

      <div>
        <label className="block mb-1 font-medium">Email Address</label>
        <input
          {...register("email")}
          className="border p-2 w-full rounded"
          disabled={loading}
          placeholder="Type your email address"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Password</label>
        <input
          placeholder="Type your password"
          {...register("password")}
          type="password"
          className="border p-2 w-full rounded"
          disabled={loading}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded mt-5 text-white ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-400"
        }`}
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpForm;
