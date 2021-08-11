import { useRef, useLayoutEffect, useState } from "react";

class ElementSize {
  constructor(width, height, padding = 0) {
    this.width = width;
    this.height = height;

    this.innerWidth = width - 2 * padding;
    this.innerHeight = height - 2 * padding;

    this.padding = padding;
  }
}

export const useElementSize = (init = { width: 600, height: 600 }) => {
  const elementRef = useRef();
  const [elementSize, setState] = useState(new ElementSize(init.width, init.height));

  useLayoutEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;

      function updateSize() {
        const style = window.getComputedStyle(element, null);
        const padding = parseFloat(style.getPropertyValue("padding"));

        const w = parseFloat(style.getPropertyValue("width"));
        const h = parseFloat(style.getPropertyValue("height"));

        setState(new ElementSize(w, h, padding));
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }
  }, [elementRef.current, setState]);

  return [elementRef, elementSize];
};
