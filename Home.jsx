import React from "react";
import NavBar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Testimonial from "../Components/Testimonial";
import Footer from '../Components/Footer'
import BlogsComp from "../Components/BlogsComp";
import WhyBest from "../Components/WhyBest";

function Home() {
	return (
		<div>
			
			<Hero />
			<WhyBest/>
			<BlogsComp />
			<Banner />
			<Testimonial />
			
		</div>
	);
}

export default Home;
