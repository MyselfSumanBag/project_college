import React from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../Components/BlogsComp";
import NavBar from "../Components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaTrainSubway, FaCar } from "react-icons/fa6";
const BlogsDetails = (props) => {
	const location = useLocation();
	console.log(props, " props");
	console.log(location, " useLocation Hook");
	const {
		id,
		image,
		name,
		description,
		imagesOfThePlace,
		mustKnow,
		howToReach,
		placesToVisit,
	} = location.state;
	var settings = {
		dots: true,
		arrow: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<div className="">
				<div className=" overflow-hidden">
					<img
						src={image}
						className="mx-auto  object-cover transition duration-700 hover:scale-110"
					/>
				</div>
				<div className="">
					<h1 className="text-2xl md:text-5xl mt-5 font-semibold px-4 md:px-10">
						{name}
					</h1>
					<div className="flex flex-col gap-4 mt-4 px-4 md:px-10">
						<h1 className="text-xl md:text-3xl">Description of {name}</h1>
						<h1 className="text-xs md:text-sm flex gap-2 items-center">
							{/* <VscDebugBreakpointData /> */}
							{description[0]}
						</h1>
						<h1 className="text-xs md:text-sm flex gap-2  items-center">
							{/* <VscDebugBreakpointData /> */}
							{description[1]}
						</h1>
						<h1 className="text-xs md:text-sm flex gap-2  items-center">
							{/* <VscDebugBreakpointData /> */}
							{description[2]}
						</h1>
						<h1 className="text-xs md:text-sm flex gap-2  items-center">
							{/* <VscDebugBreakpointData /> */}
							{description[3]}
						</h1>
					</div>
					<div>
						<h1 className="px-4 md:px-10 text-3xl font-semibold mt-4">
							Images of the place{" "}
						</h1>
						<div className="w-screen md:w-[85%]  h-[35vh] md:h-[55vh]  overflow-hidden mt-10 mx-auto   pr-10 pl-10 rounded-md text-black">
							<Slider {...settings} className="text-black ">
								{imagesOfThePlace.map((value) => {
									return (
										<div className="w-[100vw] h-[90%] mt-1 md:mt-6  overflow-hidden ">
											<img
												src={value}
												alt=""
												srcset=""
												className=" w-full mx-auto  md:w-[31rem] h-64 md:h-80 object-cover object-center pr-4 overflow-hidden"
											/>
										</div>
									);
								})}
							</Slider>
						</div>
					</div>
					<div className="flex flex-col gap-4 mt-4 px-4 md:px-10 w-screen bg-red-200 p-4 text-justify">
						<h1 className="text-xl md:text-3xl">
							Must know before visit {name}
						</h1>
						<h1 className="text-xs md:text-sm flex gap-2 items-center ">
							{mustKnow[0]}
						</h1>
						<h1 className="text-xs md:text-sm flex gap-2 items-center ">
							{mustKnow[1]}
						</h1>
						<h1 className="text-xs md:text-sm flex gap-2 items-center">
							{mustKnow[2]}
						</h1>
						<h1 className="text-xs md:text-sm flex gap-2 items-center ">
							{mustKnow[3]}
						</h1>
					</div>
					{/* how to reach */}
					<div className="flex flex-col gap-4 mt-4 px-4 md:px-10 w-screen bg-green-200 p-4 text-justify">
						<h1 className="text-xl md:text-3xl font-semibold">
							How to reach {name}
						</h1>
						<h1 className="text-xs md:text-sm flex  gap-2  ">
							<GiCommercialAirplane className=" text-[10vw] md:text-5xl" />

							{howToReach[0]}
						</h1>
						<h1 className="text-xs md:text-sm flex  gap-2 ">
							<FaTrainSubway className=" text-[3vw] md:text-4xl" />

							{howToReach[1]}
						</h1>
						<h1 className="text-xs md:text-sm flex  gap-2 ">
							<FaCar className=" text-[3vw] md:text-7xl" />

							{howToReach[2]}
						</h1>
					</div>
					<div>
						<h1 className="px-4 md:px-10 text-xl md:text-3xl font-semibold mt-4">
							Top places to visit 
						</h1>
						<div className="w-screen md:w-[85%]  h-[45vh] md:h-[55vh]  overflow-hidden mt-10 mx-auto mb-10  pr-8 pl-8 rounded-md">
							<Slider {...settings} className="text-black ">
								{placesToVisit.map((value) => {
									return (
										<div className="w-[100vw] h-[90%] mt-1 md:mt-6  overflow-hidden font-semibold">
											<img
												data-aos="zoom-in"
												src={value.image}
												alt=""
												srcset=""
												className=" w-full mx-auto  md:w-[31rem] h-64 md:h-80 object-cover object-center pr-0 md:pr-2 overflow-hidden"
											/>
											<h1 className="text-2xl font-semibold">{value.name}</h1>
										</div>
									);
								})}
							</Slider>
						</div>
					</div>
				</div>

				<BlogsComp />
			</div>
		</>
	);
};

export default BlogsDetails;
