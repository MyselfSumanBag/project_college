import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsKey } from "react-icons/bs";
const Register = () => {
	return (
		<div className="h-[70vh]  flex items-start md:items-center  justify-center bg-gray-100">
			<div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
				<div className="text-center">
					<h2 className="mt-6 text-3xl font-bold text-gray-900">
						Create Your Account
					</h2>
					<p className="mt-2 text-sm text-gray-600">
						Already have an account?{" "}
						<Link to="/login" className="text-blue-400">
							Sign In
						</Link>
					</p>
				</div>
				<form className="mt-8 space-y-6">
					<div className="rounded-md flex flex-col gap-2 shadow-sm -space-y-px">
						<div className="flex items-center gap-2 px-4 py-1 rounded-md w-full border  ">
							<FaRegUser />
							<input
								id="full-name"
								name="name"
								type="text"
								required
								className="border-none outline-none"
								placeholder="Enter your name"
							/>
						</div>
						<div className="flex items-center gap-2 px-4 py-1 rounded-md w-full border  ">
							<MdOutlineEmail/>
							<input
								id="email-address"
								name="email"
								type="email"
								required
								className="border-none outline-none"
								placeholder="Email address"
							/>
						</div>
						<div className="flex items-center gap-2 px-4 py-1 rounded-md w-full border  ">
							<BsKey/>
							<input
								id="password"
								name="password"
								type="password"
								required
								className="border-none outline-none"
								placeholder="Password"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Create Account
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
