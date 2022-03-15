import TabImagen from "./TabImagen";
import TabTex from "./TabTex";


const TabMoon = ({ luna, openTab, color, setOpenTab }) => {
	return (
		<>
			{/* <TabImagen luna={luna} openTab={openTab} /> */}
			<TabTex
				luna={luna}
				openTab={openTab}
				setOpenTab={setOpenTab}
				color={color}
			/>
		</>
	);
};

export default TabMoon;
