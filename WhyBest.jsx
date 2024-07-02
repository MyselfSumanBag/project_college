import React from "react";
import { IoAirplaneOutline } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";
import { SiImessage } from "react-icons/si";
import { BiTrip } from "react-icons/bi";

function WhyBest() {
	return (
		<div className="w-screen h-auto mb-6 mt-0 md:mt-10 px-10">
			<h1 className="text-center text-2xl font-semibold md:text-5xl font-serif mb-6">
				Why we are the best
			</h1>
			<div className="w-full h-auto flex flex-col md:flex-row justify-center items-center gap-10">
				<div
					data-aos="flip-up"
					className="w-72 p-4 h-auto bg-gray-200 rounded-md flex flex-col items-center  py-4 gap-2"
				>
					<IoAirplaneOutline className="text-3xl rotate-[335deg] shadow-2xl" />
					<h1 className="text-xl md:text-2xl text-justify">Amazing Travel</h1>
					<p className="text-center text-xs md:text-sm ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dicta
						exercitationem quibusdam saepe fugiat accusamus ratione suscipit hic
						expedita est!
					</p>
				</div>
				<div
					data-aos="flip-down"
					className="w-72 p-4 h-auto bg-gray-200 rounded-md flex flex-col items-center py-4 gap-2"
				>
					<BiTrip className="text-3xl shadow-2xl" />
					<h1 className="text-xl md:text-2xl text-justify">
						Detailed description
					</h1>
					<p className="text-center text-xs md:text-sm ">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Repudiandae cumque ad natus ipsa. Quasi fuga quia, quisquam
						blanditiis reprehenderit laboriosam!
					</p>
				</div>
				<div
					data-aos="flip-right"
					className="w-72 p-4 h-auto bg-gray-200 rounded-md flex flex-col items-center py-4 gap-2"
				>
					<FaFlag className="text-3xl shadow-2xl" />
					<h1 className="text-xl md:text-2xl text-justify">Must Visit</h1>
					<p className="text-center text-xs md:text-sm ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
						possimus voluptates unde, optio distinctio deleniti harum
						necessitatibus
					</p>
				</div>
				<div
					data-aos="flip-left"
					className="w-72 p-4 h-auto bg-gray-200 rounded-md flex flex-col items-center py-4 gap-2"
				>
					<SiImessage className="text-3xl shadow-2xl" />
					<h1 className="text-xl md:text-2xl text-justify">Nice support</h1>
					<p className="text-center text-xs md:text-sm ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
						natus quis harum! Consequuntur error corrupti dolorem asperiores
						corporis aliquid cum.
					</p>
				</div>
			</div>
		</div>
	);
}

export default WhyBest;
