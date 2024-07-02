import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import { BsKey } from "react-icons/bs";
const LoginPage = () => {
	return (
		<div className="w-screen h-[50vh]  flex justify-center items-center">
			<form className="w-[90vw] md:w-[40vw] border flex flex-col gap-4 justify-center items-center  p-4 rounded-md shadow-2xl">
				<VscAccount
					className="
				text-3xl"
				/>
				<p className="text-center text-xl font-semibold">Log in to your account</p>
				<div className="w-full flex flex-col gap-2">
					<div className="flex  items-center gap-2 border px-4 w-full py-1 rounded-md shadow-2xl ">
						<MdOutlineEmail />
						<input
							type="text"
							name=""
							id=""
							placeholder="Enter your email"
							required
							className="border-none outline-none"
						/>
					</div>
					<div className="flex  items-center gap-2 border px-4 w-full py-1 rounded-md shadow-2xl ">
						<BsKey />
						<input
							type="password"
							name=""
							id=""
							placeholder="Enter your password"
							required
							className="border-none outline-none"
							
						/>
					</div>
				</div>
				<div className="flex justify-between w-full">
					<p className="text-xs">Don't have any account ? </p>
					<Link to='/register' className="text-xs text-blue-600 cursor-pointer">Register now</Link>
				</div>
				<button className="px-10 border py-1 rounded-md bg-blue-500 text-white">Log in</button>
			</form>
		</div>
	);
};

export default LoginPage;
