import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import ContactUs from "./Pages/ContactUs.jsx";
import BlogsDetails from "./Pages/BlogsDetails.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogsComp from "./Components/BlogsComp.jsx";
import NavBar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import Register from "./Components/Register.jsx";
import {ToastContainer} from 'react-toastify'
import AboutUs from "./Pages/AboutUs.jsx";
import Chat from "./Components/Chat.jsx";



const App = () => {
	React.useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 500,
			easing: "ease-in-sine",
			
		});
		AOS.refresh();
	}, []);
	return (
		<>
		
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route index element={<Home />} />
					<Route path="blogs" element={<Blogs />} />
					<Route path="places" element={<BlogsComp />} />
					<Route path="blogs/:id" element={<BlogsDetails />} />
					<Route path="contactus" element={<ContactUs />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<Register />} />
					<Route path="aboutus" element={<AboutUs />} />
					<Route path="chatbot" element={<Chat />} />
					
				</Routes>
				<ToastContainer/>
				<Footer/>
			</BrowserRouter>
		</>
	);
};

export default App;
