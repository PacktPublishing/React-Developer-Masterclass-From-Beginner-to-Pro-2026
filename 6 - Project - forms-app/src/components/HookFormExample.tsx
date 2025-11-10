import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../schema/login-form.schema";

type FormData = {
  name: string;
  email: string;
};

const HookFormExample = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("formData", data);
  };

  const nameValue = watch("name");

  console.log("watching name field", nameValue);

  return (
    <div className="flex items-center justify-center bg-gray-200">
      {nameValue === "John" && (
        <h1 className="text-2xl text-black">
          Welcome John, we have been waiting
        </h1>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            {...register("name")}
            placeholder="Enter your name here"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email here"
            className="mt-1 w-full block border-gray-300 rounded-md shadow-sm focus:border-blue-500"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HookFormExample;
