import React, { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
	const [theme, setTheme] = useState(null);
	const [email, setEmail] = useState("");

	const themeToggleHandler = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	useEffect(
		function setCSSTheme() {
			if (theme === "dark") {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		},
		[theme]
	);

	useEffect(function toggleDarkMode() {
		if (window.matchMedia("(prefer-color-scheme:dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	useEffect(function delayShowingEmail() {
		setTimeout(() => {
			setEmail(() => "mailto:".concat(atob("ZW1haWxAYWRkcmVzcy5jb20=")));
		}, 2000);
	}, []);

	return (
		<div>
			<button
				type='button'
				onClick={themeToggleHandler}
				className='fixed w-10 h-10 z-10 right-20 top-4 bg-violet-300 text-white dark:bg-orange-300 dark:text-black text-lg rounded-md'
			>
				{theme === "dark" ? (
					<i class='fa fa-sun'></i>
				) : (
					<i class='fa fa-moon'></i>
				)}
			</button>
			<div className='bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter'>
				<div className=' max-w-5xl w-11/12 mx-auto'>

				<Intro />
				<Contact email={email} />
				<Portfolio />
				<Timeline />
				<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
