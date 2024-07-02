import React, { useEffect } from "react";
// import travel from '../assets/video/travel.mp4'
import AOS from "aos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
const Hero = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	var settings = {
		dots: false,
		arrow: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
					arrow:false
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrow:false
				},
			},
		],
	};
	const message = ["Explore the world 💥 ","Enjoy your young life 🕐","Visit your dream places 👉","Feel the nature ⛵","Feel the cold 🥶","Take a bath on the sea ⛵","See the beauty of the world 🌍","Set your plan with us💡","You can't forget the hotness 🥵"];
	const imagesOfThePlace = [
		"https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/1051077/pexels-photo-1051077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		
	];
	return (
		<div className="relative  md:h-auto w-screen overflow-hidden z-10">
			<video
				src="https://videos.pexels.com/video-files/4133023/4133023-uhd_3840_2160_30fps.mp4"
				type="video/mp4"
				autoPlay
				muted
				loop
				className="object-center object-cover z-0 w-0 md:w-screen"
			></video>
			<div
				className="absolute z-1 top-[40%] left-10 text-white flex  w-0 md:w-screen flex-col gap-2 md:gap-4"
				data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-delay="500"
			>
				<h1 className="text-xl">Pack your bag's</h1>
				<h1 className="text-2xl md:text-5xl">Select your next destination</h1>
				<h1 text-3xl>Explore the world</h1>
			</div>
			<div className="block md:hidden z-0 h-[45vh] w-screen mb-10   overflow-hidden mx-auto text-black">
				<Slider {...settings} className="text-black ">
					{imagesOfThePlace.map((value) => {
						return (
							<div className="w-[100vw] h-[100%]   overflow-hidden ">
								<img
									src={value}
									alt=""
									srcset=""
									className=" w-full mx-auto  h-80  object-cover object-center  overflow-hidden"
								/>
							</div>
						);
					})}
				</Slider>
			</div>
			<div className="absolute z-40 w-full h-full  block md:hidden top-[60%] left-1 ">
				<Slider {...settings} className="text-black w-screen ">
					{message.map((value) => {
						return (
							<p className="text-3xl text-amber-300 text-justify font-serif">{value}</p>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Hero;
