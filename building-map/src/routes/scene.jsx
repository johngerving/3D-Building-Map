import { Canvas } from "@react-three/fiber";

function Floor({ floorProps }) {
  console.log(floorProps);
  return <mesh></mesh>;
}

function Building({ buildingProps }) {
  return (
    <>
      {buildingProps.map((floorProps) => {
        return <Floor key={floorProps.name} floorProps={floorProps} />;
      })}
    </>
  );
}

export default function Scene({ buildingProps }) {
  return (
    <Canvas>
      <Building buildingProps={buildingProps} />
    </Canvas>
  );
}
