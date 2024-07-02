import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
	const [toggle, setToggle] = useState(true);

	return (
		<div className="py-4 md:py-6 px-8   flex justify-between items-center shadow-2xl relative w-screen z-20 ">
			<img
				src="https://imgs.search.brave.com/-5I7qjhHdlfmhA1an078FSf1cnKlIeRQOtJPD-1KHJc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzkzLzM4LzU2/LzM2MF9GXzU5MzM4/NTYyMl9hRWRtUzky/U1hZc0c4bU1vaDZK/T3RmM1pCcWpsaFoy/VC5qcGc"
				alt=""
				className="h-[3.5rem] w-[7rem] md:ml-10 ml-2"
			/>
			{toggle ? (
				<p
					className="md:hidden w-10 h-10 rounded-full bg-black flex justify-center items-center text-white"
					onClick={() => setToggle(!toggle)}
				>
					<RiMenu3Fill />
				</p>
			) : (
				<p
					className=" md:hidden w-10 h-10 rounded-full bg-black flex justify-center items-center text-white"
					onClick={() => setToggle(!toggle)}
				>
					<AiOutlineClose />
				</p>
			)}
			<ul className="hidden md:flex justify-center items-center gap-10 cursor-pointer">
				<Link className="hover:text-purple-600" to="/">
					Home
				</Link>
				<Link className="hover:text-purple-600" to="/Places">
					Places
				</Link>
				<Link className="hover:text-purple-600" to="/aboutus">
					About us
				</Link>
				<Link className="hover:text-purple-600" to="/contactus">
					Contact us
				</Link>
				<Link
					className="px-6 py-2 text-center text-white bg-purple-600"
					to="/login"
				>
					Log In
				</Link>
				<Link
					className="px-6 py-2 text-center text-white bg-purple-600"
					to="/chatbot"
				>
					Chat bot
				</Link>
				

				{/* <p className={`w-10 h-10 bg-black rounded-full flex justify-center items-center text-white`} onClick={handleTheme}><MdDarkMode/></p> */}
			</ul>

			{/* responsive menu */}
			<ul
				onClick={`hidden`}
				className={`md:hidden fixed top-16  p-4 flex flex-col gap-6 w-screen h-screen bg-white duration-500 ${
					!toggle ? "left-0" : "left-[-100%]"
				}`}
			>
				<Link className="hover:text-purple-600" to="/">
					Home
				</Link>
				<Link className="hover:text-purple-600" to="/places">
					Places
				</Link>
				<Link className="hover:text-purple-600" to="/aboutus">
					About us
				</Link>
				<Link className="hover:text-purple-600" to="/contactus">
					Contact us
				</Link>
				<Link
					className="w-[5rem] py-1 bg-purple-600 text-white text-center"
					to="/login"
				>
					Log In
				</Link>
				<Link
					className="w-[5rem] py-1 bg-purple-600 text-white text-center"
					to="/chatbot"
				>
					Chat Bot
				</Link>
			</ul>
		</div>
	);
}

export default NavBar;
