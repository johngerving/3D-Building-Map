import { useSpring, animated } from "@react-spring/web";

export default function SideBar({ selectedLocation }) {
  // If a location is selected, animate sidebar to the right - if location is unselected, animate sidebar to the left out of view
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
