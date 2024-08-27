import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState, useCallback } from "react";
import { useMobile } from "../../../hooks/useMobile";

function SwipeBar({ setTop, setStatus, scrollRef }) {
  const wrapperRef = useRef(null);

  const [startY, setStartY] = useState(0);

  const onSwipe = (deltaY) => {
    if (deltaY > 40) {
      // Swipe down

      // Scroll to the top of the div
      scrollRef.current.scroll({
        top: 0,
      });
      // Set the status of the sidebar to down
      setStatus("down");
      // Position the sidebar to be partially out of view and calculate the percentage of the window height
      setTop(
        (
          ((window.innerHeight - 24 - 32 - 8) / window.innerHeight) *
          100
        ).toString() + "%"
      );
    } else if (deltaY < 40) {
      // Swipe up
      setStatus("up");
      setTop("25%");
    }
  };

  const handleTouchStart = useCallback((e) => {
    if (!wrapperRef.current.contains(e.target)) {
      return;
    }

    e.preventDefault();

    setStartY(e.touches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (!wrapperRef.current.contains(e.target)) {
        return;
      }

      e.preventDefault();

      const endY = e.changedTouches[0].clientY;
      const deltaY = endY - startY;
      onSwipe(deltaY);
    },
    [startY, onSwipe]
  );

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);

  return (
    <div
      ref={wrapperRef}
      className="w-full flex items-center justify-center h-6"
    >
      <div className="w-24 bg-slate-300 h-2 rounded-lg"></div>
    </div>
  );
}

function Content({ selectedLocation }) {
  const isMobile = useMobile();

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
        left: isMobile ? "0" : selectedLocation != null ? "-344px" : "0",
        opacity: selectedLocation != null ? 0 : 1,
      },
      to: {
        left: isMobile ? "0" : selectedLocation != null ? "0" : "-344px",
        opacity: selectedLocation != null ? 1 : 0,
      },
    });
  }, [selectedLocation]);

  // Render content with name of location and description
  return (
    // Add style attributes from animation
    <animated.div
      style={{
        position: "relative",
        ...position,
      }}
    >
      <h1 className="text-2xl text-slate-700 mb-2">{selectedLocation.name}</h1>
      <p className="text-slate-700">{selectedLocation.description}</p>
    </animated.div>
  );
}

export default function SideBar({ selectedLocation }) {
  const isMobile = useMobile();

  const [status, setStatus] = useState("hidden");
  const [top, setTop] = useState("100%");

  const scrollRef = useRef(null);

  // If a location is selected, animate sidebar to the right - if location is unselected, animate sidebar to the left out of view
  const position = useSpring({
    left: isMobile ? "0" : selectedLocation != null ? "0" : "-344px",
    top: !isMobile ? "0" : top,
    config: {
      tension: 250,
      clamp: true,
    },
  });

  useEffect(() => {
    if (selectedLocation != null) {
      setTop("25%");
      setStatus("up");
    } else {
      setTop("100%");
      setStatus("hidden");
    }
  }, [selectedLocation]);

  useEffect(() => {
    function handleResize() {
      if (status == "down") {
        setTop(
          (
            ((window.innerHeight - 24 - 32 - 8) / window.innerHeight) *
            100
          ).toString() + "%"
        );
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [status]);

  return (
    <animated.div
      // Add style attributes from animation
      style={{
        position: "absolute",
        zIndex: 10,
        ...position,
      }}
      className={`z-10 bg-white w-full h-3/4 md:w-[344px] md:h-screen`}
    >
      {isMobile && (
        <SwipeBar setTop={setTop} setStatus={setStatus} scrollRef={scrollRef} />
      )}
      <div
        ref={scrollRef}
        className={`mb-5 md:mt-20 h-full md:h-[calc(100%-5rem)] px-4 ${
          status == "up" ? "overflow-scroll" : "overflow-hidden"
        }`}
      >
        {/* Only render content if a location is selected */}
        {selectedLocation != null ? (
          <Content selectedLocation={selectedLocation} />
        ) : null}
      </div>
    </animated.div>
  );
}
