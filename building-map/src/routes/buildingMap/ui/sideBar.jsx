import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";

function Content({ selectedLocation }) {
  // Initially position sidebar offscreen
  const [position, api] = useSpring(() => ({
    from: {
      left: "-344px",
      opacity: 0,
    },
  }));

  useEffect(() => {
    // When the selected location changes, start the animation:
    //    Animate from left to right if selectedLocation is not null
    //    Animate from right to left if selectedLocation is null
    api.start({
      from: {
        left: selectedLocation != null ? "-344px" : "0",
        opacity: selectedLocation != null ? 0 : 1,
      },
      to: {
        left: selectedLocation != null ? "0" : "-344px",
        opacity: selectedLocation != null ? 1 : 0,
      },
    });
  }, [selectedLocation]);

  // Render content with name of location and description
  return (
    // Add style attributes from animation
    <animated.div style={{ position: "relative", ...position }}>
      <h1 className="text-2xl text-slate-700 mb-2">{selectedLocation.name}</h1>
      <p className="text-slate-700">
        {selectedLocation.description}Ex laboris ipsum et esse sit irure
        cupidatat elit magna id labore magna nostrud. Elit id incididunt
        exercitation dolor aliqua ex non. Et aliquip ea nisi quis ut minim
        dolore aute minim esse. Laborum nulla nostrud dolor tempor sint
        consectetur adipisicing tempor cupidatat elit non dolor.
      </p>
    </animated.div>
  );
}

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
      // Add style attributes from animation
      style={{ position: "absolute", top: 0, ...position }}
      className={`z-10 bg-white w-[344px] h-screen pt-20 px-4`}
    >
      {/* Only render content if a location is selected */}
      {selectedLocation != null ? (
        <Content selectedLocation={selectedLocation} />
      ) : null}
    </animated.div>
  );
}
