import { useEffect, useRef } from "react";
import * as THREE from 'three';

const BackgroundCanvas = ()=>{
    const ref = useRef<HTMLCanvasElement |null >();
    useEffect(()=>{
        if(ref.current){const scene = new THREE.Scene(); 
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);


        // scene renderer
        
        const renderer = new THREE.WebGLRenderer({canvas:ref.current})
        renderer.setSize( window.innerWidth, window.innerHeight)
       
        // geometry and there properties
        const cubeGeometry = new THREE.BoxGeometry(1,1,1);
        const cubeMaterial = new THREE.MeshBasicMaterial({color: 0x7b68ee})
        const cube = new THREE.Mesh(cubeGeometry,cubeMaterial);

        scene.add(cube);

        const cube2Geometry = new THREE.BoxGeometry(1,1,1);
    
        const cube2Material = new THREE.MeshBasicMaterial({color: 0x7b68ee})
        const cube2 = new THREE.Mesh(cube2Geometry,cube2Material);

        cube.position.y = 1
        scene.add(cube2);
        //

        camera.position.z = 5;

        //create animation
       const animate = ()=>{
            renderer.render(scene, camera);
            cube
            cube.rotation.z+=0.05;
            cube.rotation.y+=0.05;
            requestAnimationFrame(animate);
        }
       animate();

    }


    },[])

    return(
        <div >
            <canvas ref={(el)=>ref.current = el} />
        </div>
    )

}

export default BackgroundCanvas;