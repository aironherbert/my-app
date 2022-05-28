import styled from "@emotion/styled";
import { useState, KeyboardEvent, useRef, useEffect } from "react";
import useKeyPress from "../hooks/key-press";

const Square = styled.div<{ x: number; y: number }>`
  width: 2%;
  height: 3%;
  background-color: black;
  position: absolute;

  left: ${({ x }) => {
    return `${x}%`;
  }};
  bottom: ${({ y }) => {
    return `${y}%`;
  }};
`;

export default function Block() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(97);
  const inputEl = useRef<HTMLHeadingElement>(null);

  const keydown = useKeyPress("ArrowDown");
  useEffect(() => {
    console.log(keydown);
  }, [keydown]);

  useEffect(() => {
    if (x > 98) {
      return setX(0);
    }
    if (x < 0) {
      return setX(98);
    }
  }, [x]);

  useEffect(() => {
    if (y > 97) {
      return setY(0);
    }
    if (y < 0) {
      return setY(97);
    }
  }, [y]);

  const handleKeyboardEvent = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === "ArrowLeft") {
      return setX((prev) => {
        return prev - 1;
      });
    }
    if (e.key === "ArrowRight") {
      return setX((prev) => {
        return prev + 1;
      });
    }
    if (e.key === "ArrowUp") {
      return setY((prev) => {
        return prev + 1;
      });
    }
    if (e.key === "ArrowDown") {
      return setY((prev) => {
        return prev - 1;
      });
    }
    return null;
  };
  return (
    <>
      <Square
        tabIndex={-1}
        ref={inputEl}
        x={x}
        y={y}
        onKeyDown={handleKeyboardEvent}
        onClick={() => inputEl.current?.focus()}
      ></Square>
    </>
  );
}
