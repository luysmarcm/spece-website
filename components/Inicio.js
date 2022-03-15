
const Inicio = () => {
  return (
		<section className="relative bg-banner bg-auto bg-no-repeat bg-center bg-black bg-fixed py-44 lg:py-12">
			<div className="flex flex-col w-full  p-2 lg:flex-row items-center gap-12 lg:p-28 lg:h-3/4 xl:p-28 justify-between justify-items-end">
				<div className="flex w-full flex-col-2 justify-between py-20">
					<div className=" relative z-30  h-12 bg-center lg:h-auto py-28 text-white text-left space-y-3 ">
						<div className="texto text-white text-2xl md:text-3xl lg:text-xl text-left font-extralight">
							SO, YOU WANT TO TRAVEL TO
						</div>
						<div className="text-white text-3xl md:text-4xl lg:text-9xl text-left font-bellefair">
							SPACE
						</div>
						<div className="w-96 tracking-normal text-primary text-2xl md:text-3xl lg:text-lg text-justify font-extralight">
							Let’s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge of
							it. Well sit back, and relax because we’ll give you a truly out of
							this world experience!
						</div>
					</div>
					<div className="p-32 ">
						<button className="my-button texto2 bg-white text-2xl font-bellefair">
							EXPLORE
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Inicio;
