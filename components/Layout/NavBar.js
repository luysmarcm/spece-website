import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
	{
		title: "00 HOME",
		path: "/",
	},
	{
		title: "01 DESTINATION",
		path: "/destination",
	},
	{
		title: "02 CREW",
		path: "/crew",
	},
	{
		title: "03 TECHNOLOGY",
		path: "/tecnology",
	},
];

const NavBar = () => {
	return (
		<nav>
			<section className=" space-y-5 px-6 lg:px-16 py-3 lg:py-10 w-full bg-negro fixed z-50 ">
				<div className="grid grid-row-2 md:grid-cols-2 gap-4 relative content-end">
					<div
						className="relative md:block lg:w-full "
						style={{ width: "30px" }}
					>
						<Link href="/" passHref>
							<Image
								src="/image/logo.svg"
								alt="Logo"
								layout="responsive"
								width={48}
								height={48}
								priority
							/>
						</Link>
					</div>
					{/* <div className="w-1/4 border-t-2 opacity-50 border-white" /> */}
					<div className="navBar w-full h-full ">
						<div className="flex flex-row justify-self-end space-x-16 text-white text-1xl navBar ">
							{links.map((link, i) => (
								<ul className="font-barlow" key={i + "nav"}>
									<Link href={link.path}>{link.title}</Link>
								</ul>
							))}
						</div>
					</div>
				</div>
			</section>
		</nav>
	);
};

export default NavBar;
