import Image from "next/image";

const TabImagen = ({ luna, openTab }) => {
	const { id, titulo, imagen } = luna;

	return (
		<div className="relative flex flex-col">
			<div className="p-10 flex-auto">
				<div className="tab-content tab-space">
					<div className={openTab === id ? "block" : "hidden"} id="link1">
						<Image
							src={imagen}
							alt={titulo}
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
	);
};

export default TabImagen;
