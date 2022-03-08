import p5 from "p5";
import React, { useCallback, useEffect, useRef, useState } from "react";
import img from "../../test.jpg";

interface AsciiImageProps {}

export const AsciiImage: React.FC<AsciiImageProps> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [canvas, setCanvas] = useState(null);

  const sketch = useCallback((p) => {
    let img;
    p.prelaod = () => {
      img = p.loadImage("../../test.jpg");
    };
    p.setup = () => {
      p.image(img, 0, 0);
      p.createCanvas(400, 400);
    };

    p.draw = () => {
      //   p.background(220);
      //   p.ellipse(50, 50, 80, 80);
    };
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const canvas = new p5(sketch, ref.current);
  }, []);

  return (
    <div>
      <div ref={ref}></div>
    </div>
  );
};
