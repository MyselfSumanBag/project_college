import React from "react";
import {
	FaYoutube,
	FaLinkedin,
	FaTelegram,
	FaTwitter,
	FaPhoneAlt,
	FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
	return (
		<div className=" mt-6 h-auto p-2 md:p-8 w-full grid md:grid-cols-3">
			<div className="  py-4 px-2 flex flex-col gap-2">
				<img
				src="https://imgs.search.brave.com/-5I7qjhHdlfmhA1an078FSf1cnKlIeRQOtJPD-1KHJc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzkzLzM4LzU2/LzM2MF9GXzU5MzM4/NTYyMl9hRWRtUzky/U1hZc0c4bU1vaDZK/T3RmM1pCcWpsaFoy/VC5qcGc"
				alt="" className="h-[3.5rem] w-[7rem] md:ml-10 ml-2"/>
				<div className="flex  items-center gap-2">
					<MdEmail className="text-sm md:text-xl" />
					support_travelwithus@gmail.com
				</div>
				<div className="flex  items-center gap-2">
					<FaPhoneAlt className="text-sm md:text-xl" />
					+91 <span>7602579339</span>
				</div>
				{/* icons */}
				<div className="flex gap-2 mt-2">
					<p className="w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-red-900">
						<FaYoutube className="text-sm md:text-xl " />
					</p>
					<p className="w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-blue-800">
						<FaLinkedin className="text-sm md:text-xl" />
					</p>
					<p className="w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-blue-900">
						<FaTelegram className="text-sm md:text-xl" />
					</p>
					<p className="w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-indigo-900">
						<FaTwitter className="text-sm md:text-xl" />
					</p>
					<p className="w-8 h-8 bg-black text-white rounded-full flex justify-center items-center hover:bg-red-400">
						<FaInstagram className="text-sm md:text-xl" />
					</p>
				</div>
			</div>
			{/* company */}
			<div className="py-4 px-2 flex flex-col gap-2">
				<h1 className=" text-xl md:text-3xl md:mb-2 ">Company</h1>
				<div className="flex gap-4 border-t-4 border-orange-700 py-4">
					<ul className="text-xs md:text-sm flex flex-col gap-2">
						<li>About Us</li>
						<li>FAQ</li>
						<li>Privacy Policy</li>
					</ul>
					<ul className="text-xs md:text-sm flex flex-col gap-2">
						<li>Contact us</li>
						<li>Job assistance</li>
						<li>Terms and conditions</li>
					</ul>
				</div>
			</div>
			{/* Products */}
			<div className="py-4 px-2 flex flex-col gap-2">
				<h1 className=" text-xl md:text-3xl md:mb-2 ">Products</h1>
				<div className="flex gap-4 border-t-4 border-orange-700 py-4">
					<ul className="text-xs md:text-sm flex flex-col gap-2">
						<li>Most visited places</li>
						<li>Experience Portal</li>
						<li>Hall of fame pictures</li>
					</ul>
					<ul className="text-xs md:text-sm flex flex-col gap-2">
						<li>Job Portal</li>
						<li>Become an Tour agent</li>
						<li>Blog</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
