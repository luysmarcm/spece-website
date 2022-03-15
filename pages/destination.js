import Image from "next/image";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import TabMoon from "../components/TabMoon";

const color = "pink";

const lunas = [
	{
		id: 1,
		titulo: "MOON",
		description:
			"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2	and Apollo 11 landing sites.",
		imagen: "/image/image-moon.webp",
		distance: "384,400 KM",
		travel: "3 days",
	},
	{
		id: 2,
		titulo: "MARS",
		description:
			"	Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetarymountain in our solar system. It’s two and a halftimes the size of Everest!",
		imagen: "/image/image-mars.webp",
		distance: "225 MIL. km",
		travel: "9 months",
	},
	{
		id: 3,
		titulo: "EUROPA",
		description:
			"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2	and Apollo 11 landing sites.",
		imagen: "/image/image-europa.webp",
		distance: "384,400 KM",
		travel: "3 days",
	},
	{
		id: 4,
		titulo: "TITAN",
		description:
			"The smallest of the four Galilean moons orbitingJupiter, Europa is a winter lover’s dream. With anicy surface, it’s perfect for a bit of ice skating,	curling, hockey, or simple relaxation in your snug wintery cabin.",
		imagen: "/image/image-titan.webp",
		distance: "628 MIL. KM",
		travel: "3 years",
	},
];

const Destination = ({color}) => {
  const [openTab, setOpenTab] =useState(1);
	return (
		<Layout>
			<section className="relative bg-destination bg-cover bg-no-repeat bg-center">
				<div className="p-32">
					<div className="flex flex-row space-x-5">
						<span className="text-gray-700 font-semibold text-3xl texto  ">
							01
						</span>
						<h2 className="text-white font-barlow font-extralight texto text-3xl uppercase">
							Pick your destination
						</h2>
					</div>
					<div className="grid grid-cols-2 py-20 gap-10 p-10">
						<div className="relative flex flex-col w-full">
							<div className="p-10 flex-auto">
								<div className="tab-content tab-space">
									<div
										className={openTab === 1 ? "block" : "hidden"}
										id="link1"
									>
										<Image
											src="/image/image-moon.webp"
											alt="Moon"
											layout="responsive"
											objectFit="cover"
											width={445}
											height={445}
											className="rounded-md"
											unoptimized
											priority
										/>
									</div>
									<div
										className={openTab === 2 ? "block" : "hidden"}
										id="link2"
									>
										<Image
											src="/image/image-mars.webp"
											alt="Moon"
											layout="responsive"
											objectFit="cover"
											width={445}
											height={445}
											className="rounded-md"
											unoptimized
											priority
										/>
									</div>
									<div
										className={openTab === 3 ? "block" : "hidden"}
										id="link3"
									>
										<Image
											src="/image/image-europa.webp"
											alt="Moon"
											layout="responsive"
											objectFit="cover"
											width={445}
											height={445}
											className="rounded-md"
											unoptimized
											priority
										/>
									</div>
									<div
										className={openTab === 4 ? "block" : "hidden"}
										id="link4"
									>
										<Image
											src="/image/image-titan.webp"
											alt="Moon"
											layout="responsive"
											objectFit="cover"
											width={445}
											height={445}
											className="rounded-md"
											unoptimized
											priority
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="flex">
							<div className="w-full">
								<ul className="flex justify-start flex-row " role="tablist">
									<li className=" text-center text-3xl px-2">
										<a
											className={
												"inline-block py-4  text-lg texto2 font-extralight text-white rounded-t-lg border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 " +
												(openTab === 1
													? "text-white bg-" + color + "-600 border-gray-300"
													: "text-" + color + "-600 ")
											}
											onClick={(e) => {
												e.preventDefault();
												setOpenTab(1);
											}}
											data-toggle="tab"
											href="#link1"
											role="tablist"
										>
											MOON
										</a>
									</li>
									<li className="text-center px-2">
										<a
											className={
												"inline-block py-4 text-lg texto2 font-extralight text-center text-white rounded-t-lg border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300" +
												(openTab === 2
													? "text-white bg-" + color + "-600 border-gray-300 "
													: "text-" + color + "-600 ")
											}
											onClick={(e) => {
												e.preventDefault();
												setOpenTab(2);
											}}
											data-toggle="tab"
											href="#link2"
											role="tablist"
										>
											MARS
										</a>
									</li>
									<li className="text-center px-2">
										<a
											className={
												"inline-block py-4  text-lg texto2 font-extralight text-center text-white rounded-t-lg border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300" +
												(openTab === 3
													? "text-white bg-" + color + "-600 border-gray-300"
													: "text-" + color + "-600 ")
											}
											onClick={(e) => {
												e.preventDefault();
												setOpenTab(3);
											}}
											data-toggle="tab"
											href="#link3"
											role="tablist"
										>
											EUROPA
										</a>
									</li>
									<li className="text-center px-2">
										<a
											className={
												"inline-block py-4 text-lg texto2 font-extralight text-center text-white rounded-t-lg border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300" +
												(openTab === 4
													? "text-white bg-" + color + "-600 border-gray-300"
													: "text-" + color + "-600 ")
											}
											onClick={(e) => {
												e.preventDefault();
												setOpenTab(4);
											}}
											data-toggle="tab"
											href="#link2"
											role="tablist"
										>
											TITAN
										</a>
									</li>
								</ul>
								<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
									<div className="px-4 py-5 flex-auto">
										<div className="tab-content tab-space">
											<div
												className={openTab === 1 ? "block" : "hidden"}
												id="link1"
											>
												<div className="space-y-8">
													<h className="text-8xl font-bellefair text-white">
														MOON
													</h>
													<p className="w-3/4 tracking-normal text-primary text-2xl md:text-3xl lg:text-xl text-justify font-extralight font-barlow">
														See our planet as you’ve never seen it before. A
														perfect relaxing trip away to help regain
														perspective and come back refreshed. While you’re
														there, take in some history by visiting the Luna 2
														and Apollo 11 landing sites.
													</p>
													<div className="w-full border-t-2 opacity-50 border-white" />

													<div className="grid grid-cols-2">
														<div className=" flex flex-col space-y-3">
															<p className=" text-primary font-extralight texto2">
																AVG. DISTANCE
															</p>
															<p className="text-white font-bellefair text-3xl">
																384,400 KM
															</p>
														</div>
														<div className=" flex flex-col space-y-3">
															<p className=" text-primary font-extralight texto2 uppercase">
																Est. travel time
															</p>
															<p className="text-white font-bellefair text-3xl uppercase">
																3 days
															</p>
														</div>
													</div>
												</div>
											</div>
											<div
												className={openTab === 2 ? "block" : "hidden"}
												id="link2"
											>
												<div className="space-y-8">
													<h className="text-8xl font-bellefair text-white">
														MARS
													</h>
													<p className="w-3/4 tracking-normal text-primary text-2xl md:text-3xl lg:text-xl text-justify font-extralight font-barlow">
														Don’t forget to pack your hiking boots. You’ll need
														them to tackle Olympus Mons, the tallest planetary
														mountain in our solar system. It’s two and a half
														times the size of Everest!
													</p>
													<div className="w-full border-t-2 opacity-50 border-white" />

													<div className="grid grid-cols-2">
														<div className=" flex flex-col space-y-3">
															<p className=" text-primary font-extralight texto2">
																AVG. DISTANCE
															</p>
															<p className="text-white font-bellefair text-3xl">
																225 MIL. km
															</p>
														</div>
														<div className=" flex flex-col space-y-3">
															<p className=" text-primary font-extralight texto2 uppercase">
																Est. travel time
															</p>
															<p className="text-white font-bellefair text-3xl uppercase">
																9 months
															</p>
														</div>
													</div>
												</div>
											</div>
											<div
												className={openTab === 3 ? "block" : "hidden"}
												id="link3"
											>
												<div className="space-y-8">
													<h className="text-8xl font-bellefair text-white">
														EUROPA
													</h>
													<p className="w-3/4 tracking-normal text-primary text-2xl md:text-3xl lg:text-xl text-justify font-extralight font-barlow">
														The smallest of the four Galilean moons orbiting
														Jupiter, Europa is a winter lover’s dream. With an
														icy surface, it’s perfect for a bit of ice skating,
														curling, hockey, or simple relaxation in your snug
														wintery cabin.
													</p>
													<div className="w-full border-t opacity-50 border-white" />

													<div className="grid grid-cols-2">
														<div className=" flex flex-col space-y-3">
															<p className=" text-primary font-extralight texto2">
																AVG. DISTANCE
															</p>
															<p className="text-white font-bellefair text-3xl uppercase">
																628 MIL. km
															</p>
														</div>
														<div className=" flex flex-col space-y-3">
															<p className=" text-primary font-extralight texto2 uppercase">
																Est. travel time
															</p>
															<p className="text-white font-bellefair text-3xl uppercase">
																3 years
															</p>
														</div>
													</div>
												</div>
											</div>
											<div
												className={openTab === 4 ? "block" : "hidden"}
												id="link4"
											>
												<div className="space-y-8">
													<h className="text-8xl font-bellefair text-white">
														TITAN
													</h>
													<p className="w-3/4 tracking-normal text-primary text-2xl md:text-3xl lg:text-xl text-justify font-extralight font-barlow">
														The only moon known to have a dense atmosphere other
														than Earth, Titan is a home away from home (just a
														few hundred degrees colder!). As a bonus, you get
														striking views of the Rings of Saturn.
													</p>
													<div className="w-full border-t-2 opacity-50 border-white" />

													<div className="grid grid-cols-2">
														<div className=" flex flex-col space-y-3">
															<p className=" text-primary font-extralight texto2">
																AVG. DISTANCE
															</p>
															<p className="text-white font-bellefair text-3xl">
																1.6 BIL. km
															</p>
														</div>
														<div className=" flex flex-col space-y-3">
															<p className=" text-primary font-extralight texto2 uppercase">
																Est. travel time
															</p>
															<p className="text-white font-bellefair text-3xl uppercase">
																7 years
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				
				</div>
			</section>
		</Layout>
	);
};

export default Destination;
