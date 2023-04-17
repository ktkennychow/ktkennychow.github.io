import React from "react";

const Contact = ({ email }) => (
	<div className='container max-w-screen-lg mx-auto'>
		<div className='flex flex-wrap justify-center gap-2 pb-8'>
			<a
				target='_blank'
				href='https://www.linkedin.com/in/kennychowkt/'
				className='bg-stone-800 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full'
			>
				<i class='fa-brands fa-linkedin'></i>
			</a>
			<a
				target='_blank'
				href='https://www.linkedin.com/in/kennychowkt/'
				className='bg-stone-800 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full'
			>
				<i class='fa-brands fa-github'></i>
			</a>
			<a
				target='_blank'
				href='https://www.linkedin.com/in/kennychowkt/'
				className='bg-stone-800 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full'
			>
				<i class='fa-brands fa-twitter'></i>
			</a>
			<a
				href={email}
				className='bg-stone-800 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full'
			>
				<i class='fa fa-envelope'></i>
			</a>
		</div>
	</div>
);

export default Contact;
