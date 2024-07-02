import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
	{
		id: 1,
		name: "Samuel",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quas eaque animi fugiat iusto incidunt sunt, soluta maiores labore explicabo, eum quasi beatae voluptatibus, distinctio consectetur cumque dolore sapiente ex.",
		img: "https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		id: 2,
		name: "John Doe",
		text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis commodi optio hic, repellat quos ducimus natus laudantium neque porro eligendi laboriosam saepe, omnis consequuntur fuga nihil! Facilis, aperiam nam?",
		img: "https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		id: 3,
		name: "Smith",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium temporibus enim ad dolorem aperiam, rem, praesentium velit inventore laudantium iusto ex facere minus? Quos, pariatur! Amet dolores et iste? Pariatur!",
		img: "https://images.pexels.com/photos/2412606/pexels-photo-2412606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		id: 4,
		name: "Smith",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium temporibus enim ad dolorem aperiam, rem, praesentium velit inventore laudantium iusto ex facere minus? Quos, pariatur! Amet dolores et iste? Pariatur!",
		img: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 5,
		name: "Smith",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium temporibus enim ad dolorem aperiam, rem, praesentium velit inventore laudantium iusto ex facere minus? Quos, pariatur! Amet dolores et iste? Pariatur!",
		img: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 6,
		name: "Smith",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium temporibus enim ad dolorem aperiam, rem, praesentium velit inventore laudantium iusto ex facere minus? Quos, pariatur! Amet dolores et iste? Pariatur!",
		img: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 7,
		name: "Smith",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium temporibus enim ad dolorem aperiam, rem, praesentium velit inventore laudantium iusto ex facere minus? Quos, pariatur! Amet dolores et iste? Pariatur!",
		img: "https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		id: 8,
		name: "Smith",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium temporibus enim ad dolorem aperiam, rem, praesentium velit inventore laudantium iusto ex facere minus? Quos, pariatur! Amet dolores et iste? Pariatur!",
		img: "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	
];

const Testimonial = () => {
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
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
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
			<div data-aos="fade-up" data-aos-duration="300" className="py-4">
				<div className="w-screen h-auto mx-auto">
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-3xl font-semibold">Customer Reviews</h1>
						<p className="text-xs pl-6">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
							suscipit!
						</p>
					</div>
					
					{/* testimonial section */}

					<div className="w-screen md:w-3/4 h-auto  overflow-hidden py-10 mt-8 mx-auto rounded-md  pr-10 pl-10">
						<Slider {...settings}>
							{data.map((value) => {
								return (
									<div className="h-full  text-black rounded-xl border-l-2 ml-4 shadow-2xl">
										<div className="mt-2 flex justify-center items-center rounded-t-xl">
											<img
												src={value.img}
												alt=""
												srcset=""
												className="h-28 w-28 md:h-44 md:w-44 rounded-full"
											/>
										</div>
										<div className="flex flex-col justify-center items-center gap-2 mt-2 ">
											<p className="text-2xl font-semibold">{value.name}</p>
											<p className="text-xs md:text-sm pr-10 pl-10 text-center">{value.text}</p>
										</div>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
