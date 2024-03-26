import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

function Header() {
	return (
		<header className="flex p-2 justify-between items-center">
			<h1 className="font-bold">MIT Scratch Editor Clone</h1>
			<div className="flex gap-2 items-center">
				<a target="_blank" href="https://www.linkedin.com/in/mitesh-birru/">
					<FaLinkedin size={30} cursor="pointer" />
				</a>
				<a target="_blank" href="https://github.com/mitibirru">
					<FaGithub cursor="pointer" size={30} />
				</a>
			</div>
		</header>
	);
}

export default Header;
