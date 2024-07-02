import React from "react";
import Suman from '../assets/Suman.jpg'
import Arnab from '../assets/Arnab.jpg'
import Payel from '../assets/Payel.jpg'
import Insia from '../assets/Insia.jpg'
import { Link } from "react-router-dom";
function AboutUs() {
	return (
		<div className="w-screen h-auto flex flex-col mx-auto py-10 justify-center items-center">
			<div className="mb-10">
				<h1 className="text-3xl font-semibold mb-3 text-center">About Us</h1>
				<p className="w-full text-center text-gray-500">
					India's favourite trip planning website. Coming soon to <br />
					<span>the entire world.</span>
				</p>
			</div>
			<div className="w-[70vw] mb-10 object-cover object-center overflow-hidden h-auto flex justify-center">
				<img
					src="https://images.pexels.com/photos/7235893/pexels-photo-7235893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
					className="object-cover object-center overflow-hidden w-full"
				/>
			</div>
			<div className="flex justify-center items-center flex-col w-screen mx-auto text-center">
				<p className="text-3xl font-semibold">
					Travel planning has always been messy and <br />
					<span>difficult</span>
				</p>
				<p className="w-[90vw] md:w-[40vw] mt-4 text-gray-500">
					Planning every single trip needs answers to a number of questions.
					Holidify is attempting to collect all the information that you will
					ever need to plan your trip - from when, where and how, to more hidden
					gems in every destination, Holidify is the one-stop solution to all
					your travel planning needs.
				</p>
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
				<div className="w-[80%] md:w-[30%]">
					<p className="text-3xl font-semibold mb-4">Goes Around the Globe</p>
					<p className="text-gray-500 text-justify">
						We started with a focus on India - and are proud to be building a
						global company out of India - but our ambitions are global. Soon
						enough, you will be able to research your trip to any destination
						around the world on Holidify.
					</p>
				</div>
				<div className="w-[80%] md:w-[30%] overflow-hidden">
					<img
						src="https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
						className="object-cover object-center"
					/>
				</div>
			</div>
			<div className="w-[80vw]">
				<p className="text-center mt-10 mb-10 text-3xl font-semibold">
					Our team
				</p>
				<div className="flex flex-wrap gap-6 justify-center">
					<div className=" ">
						<img
							src={Payel}
							alt=""
							className="w-64 h-96 object-cover object-center rounded-md shadow-2xl overflow-hidden"
						/>
						<p className="mt-4 text-xl font-semibold">Payel Jana</p>
						<p className="tracking-widest text-gray-500">WEB DESIGNER</p>
					</div>
					<div>
						<img
							src={Insia}
							alt=""
							className="w-64 h-96 object-cover object-center rounded-md shadow-2xl overflow-hidden"
						/>
						<p className="mt-4 text-xl font-semibold">Insia Taslim</p>
						<p className="tracking-widest text-gray-500">
							DIRECTOR, TECHNOLOGY
						</p>
					</div>
					<div>
						<img
							src={Arnab}
							alt=""
							className="w-64 h-96 object-cover object-center rounded-md shadow-2xl overflow-hidden"
						/>
						<p className="mt-4 text-xl font-semibold">Arnab Kabiraj</p>
						<p className="tracking-widest text-gray-500">DIRECTOR, CONTENT</p>
					</div>
					<div>
						<img
							src={Suman}
							alt=""
							className="w-64 h-96 object-cover object-center rounded-md shadow-2xl overflow-hidden"
						/>
						<p className="mt-4 text-xl font-semibold">Suman Bag</p>
						<p className="tracking-widest text-gray-500">CONTENT WRITER</p>
					</div>
				</div>
			</div>
			<div className="mt-16 text-center">
                <p className="mb-6 font-semibold text-xl">"A journey of a thousand miles begins with a single step."</p>
                <Link to='/places' className='px-6 py-1 bg-blue-600 text-white'>START NOW</Link>
            </div>
            <div className="mt-10">
                <p className="text-5xl font-serif">THANK YOU 😊</p>
            </div>
		</div>
	);
}

export default AboutUs;
