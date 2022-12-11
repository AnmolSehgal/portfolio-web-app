import { useEffect, useRef } from "react";
import * as THREE from "three";
import { shape } from "../../utils/shapeRandomizer";

import styles from "./BackgroundCanvas.module.scss";

const BackgroundCanvas = () => {
  const ref = useRef<HTMLCanvasElement | null>();
  useEffect(() => {
    if (ref.current) {
      let shapes: any[] = [];
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      // scene renderer

      const renderer = new THREE.WebGLRenderer({ canvas: ref.current });
      renderer.setSize(window.innerWidth, window.innerHeight);

      camera.position.z = 5;

      //create animation
      const animate = () => {
        const randomShape = shape();
        shapes.push(randomShape);

        scene.add(randomShape);

        shapes?.forEach((shape: any, index) => {
          shape.position.z -= 0.05;
          shape.rotation.y += 0.05;
          if (shape.position.z <= -40) scene.remove(shape);
        });
        shapes = shapes.filter((shape) => shape.position.z >= -50);

        renderer.render(scene, camera);

        requestAnimationFrame(animate);
      };
      animate();
    }
  }, []);

  return (
    <div className={styles["background-canavas"]}>
      <canvas ref={(el) => (ref.current = el)} />
    </div>
  );
};

export default BackgroundCanvas;
