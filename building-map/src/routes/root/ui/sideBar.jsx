import { useSpring, animated } from "@react-spring/web";

export default function SideBar({ selectedLocation }) {
  const position = useSpring({
    left: selectedLocation != null ? "0" : "-344px",
    config: {
      tension: 250,
      clamp: true,
    },
  });

  return (
    <animated.div
      style={{ position: "absolute", top: 0, ...position }}
      className={`z-10 bg-white w-[344px] h-screen`}
    />
  );
}
