"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import React from "react";

const RegisterForm = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;
    const payload = { username, password };
    // console.log(payload)
    const result = await registerUser(payload);
    console.log(result);
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleRegister} className="space-y-4">
        <label htmlFor="userName" className="block">
          UserName
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="enter username"
          className="block"
        />
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="enter password"
          className="block"
        />
        <button className="cursor-pointer px-2.5 bg-amber-50 text-black rounded-2xl">
          Regsiter
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
