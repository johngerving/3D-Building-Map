import { memo, useRef, useState, useEffect } from "react";
import ArrowDown from "../../../assets/arrow_down.svg?react";
import ArrowRight from "../../../assets/arrow_right.svg?react";

export function Tree({
  children,
  name,
  style,
  childStyle,
  border = true,
  defaultOpen = false,
  onClick = () => {},
  disabled = false,
}) {
  const [isOpen, setOpen] = useState(defaultOpen);

  const className = border ? "border rounded-md" : "";

  return (
    <div className={className} style={style}>
      <button
        onClick={() => {
          setOpen((isOpen) => !isOpen);
          onClick(isOpen);
        }}
        disabled={disabled}
        className="tree-button flex items-center w-full"
      >
        {isOpen ? (
          <ArrowDown className="fill-black w-10 h-10" />
        ) : (
          <ArrowRight className="fill-black w-10 h-10" />
        )}
        <h2 className="text-lg">{name}</h2>
      </button>
      <div
        children={children}
        style={childStyle}
        className={isOpen ? "" : "hidden"}
      />
    </div>
  );
}
