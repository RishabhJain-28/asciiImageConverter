import p5 from "p5";
import React, { useCallback, useEffect, useRef, useState } from "react";
import imgURL from "../../test.jpg";

interface AsciiImageProps {}

export const AsciiImage: React.FC<AsciiImageProps> = ({}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [canvas, setCanvas] = useState(null);
  const [img, setImage] = useState(null);

  useEffect(() => {
    console.log("img", img);
  }, [img]);

  const sketch = useCallback(
    (p) => {
      // p.prelaod = () => {
      //   img = p.loadImage("../../test.jpg");
      // };
      p.setup = () => {
        p.createCanvas(1000, 1000);
        if (!img) {
          p.loadImage(imgURL, (img) => {
            setImage(img);
            p.redraw();
          });
        }
        if (img) {
          p.image(img, 0, 0);
          p.loadPixels();
          console.log("pixels", p.pixels);
        }
      };

      p.draw = () => {
        p.background(220);
        p.ellipse(50, 50, 80, 80);
        console.log(img);
      };
    },
    [img]
  );

  useEffect(() => {
    if (!ref.current) return;

    const canvas = new p5(sketch, ref.current);
  }, [img]);

  return (
    <div>
      <div ref={ref}></div>
    </div>
  );
};
