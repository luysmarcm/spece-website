import React from 'react';

const TabTex = ({ luna, setOpenTab, openTab, color}) => {
	const { id, titulo, description, distance, travel } = luna;
	return (
		<>
			<ul className="flex justify-start flex-row " role="tablist">
				<li className=" text-center text-3xl px-2">
					<a
						className={
							"inline-block py-4  text-lg texto2 font-extralight text-white rounded-t-lg border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300 " +
							(openTab === id
								? "text-white bg-" + color + "-600 border-gray-300"
								: "text-" + color + "-600 ")
						}
						onClick={(e) => {
							e.preventDefault();
							setOpenTab(id);
						}}
						data-toggle="tab"
						href="#link1"
						role="tablist"
					>
						{titulo}
					</a>
				</li>
			</ul>
			<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
				<div className="px-4 py-5 flex-auto">
					<div className="tab-content tab-space">
						<div className={openTab === id ? "block" : "hidden"} id="link1">
							<div className="space-y-8">
								<h className="text-8xl font-bellefair text-white">{titulo}</h>
								<p className="w-3/4 tracking-normal text-primary text-2xl md:text-3xl lg:text-xl text-justify font-extralight font-barlow">
									{description}
								</p>
								<div className="w-full border-t-2 opacity-50 border-white" />

								<div className="grid grid-cols-2">
									<div className=" flex flex-col space-y-3">
										<p className=" text-primary font-extralight texto2">
											AVG. DISTANCE
										</p>
										<p className="text-white font-bellefair text-3xl">
											{distance}
										</p>
									</div>
									<div className=" flex flex-col space-y-3">
										<p className=" text-primary font-extralight texto2 uppercase">
											Est. travel time
										</p>
										<p className="text-white font-bellefair text-3xl uppercase">
											{travel}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TabTex;
