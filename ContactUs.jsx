import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_ewdf3v9", "template_x3se9ma", form.current, {
				publicKey: "p9SP-ojwQCiSF9zmc",
			})
			.then(
				() => {
					toast("Your message send successfully 😊");
				},
				(error) => {
					toast(error);
				}
			);
	};
	return (
		<>
			<div className="mt-8 mb-10 w-full h-auto md:h-[80vh] px-2 md:px-10 flex flex-col md:flex-row">
				<div className=" w-full h-full md:w-1/2 p-2 md:p-6 leading-10 flex flex-col gap-4">
					<h1 className="text-2xl md:text-5xl font-semibold tracking-wide">
						Contact Us
					</h1>
					<div>
						<p className="text-xs md:text-xl text-justify text-gray-700">
							For any queries, Please reach out to us. Our Support team <br />{" "}
							will get back to you within 24 hours.
						</p>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2">
							<MdEmail className="text-sm md:text-xl" />
							<span className="text-xs md:text-sm">
								Support@prepareforexams.com
							</span>
						</div>
						<div className="flex items-center gap-2">
							<FaPhoneAlt className="text-sm md:text-xl" />
							+91 <span className="text-xs md:text-sm">9999999999</span>
						</div>
					</div>
					<div>
						<img
							src="https://pwskills.com/images/contactUs/employeesHelpingCustomers.svg"
							alt="students discussion photo"
						/>
					</div>
				</div>
				<div className=" w-full md:w-1/2 h-auto md:h-[90%] shadow-2xl border  p-4 md:p-20 rounded-md">
					<h1 className="text-3xl font-semibold">Enquiry</h1>
					<form
						ref={form}
						onSubmit={sendEmail}
						className="flex flex-col gap-4 mt-2 md:mt-10"
					>
						<div className="flex gap-2 justify-start  items-center">
							<label className="text-sm font-semibold">Name</label>
							<input
								type="text"
								name="from_name"
								required
								placeholder="Enter your name "
								className="border-b-[1.5px] border-black outline-none w-[90%]"
							/>
						</div>
						<div className="flex gap-2 items-center">
							<label className="text-sm font-semibold">Email</label>
							<input
								type="email"
								required
								placeholder="Enter your email address"
								name="from_email"
								className="border-b-[1.5px] border-black outline-none w-[90%]"
							/>
						</div>
						<div className="flex gap-2 items-center">
							<label className="text-sm font-semibold">Message</label>
							<textarea
								name="message"
								required
								placeholder="Enter your complaint here"
								className="w-[80%] p-4 h-36 border-[1px] border-black rounded-md"
							/>
						</div>
						<input
							type="submit"
							value="Send"
							className="w-[20%] py-1 bg-blue-700 rounded-md text-white hover:bg-blue-900 "
						/>
						<ToastContainer />
					</form>
				</div>
			</div>
		</>
	);
}

export default ContactUs;
