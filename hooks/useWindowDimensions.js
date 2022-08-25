import { useEffect, useState } from "react";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: windowWidth, innerHeight: height } = window;
    return {
      windowWidth,
      height,
    };
  }
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};

export default useWindowDimensions;
