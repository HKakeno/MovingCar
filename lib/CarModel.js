import React, { Suspense } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Ground } from './Ground'
import { Car } from './Car'
import { Building } from './Building'
import { BackEffect } from './BackEffect'

function CarShow() {
    let defaultPosition = [-3, 0.5, 0]
    function zoom(event) {
        // event.preventDefault()
        // scale += event.deltaY * -0.01;

        // // Restrict scale
        // scale = Math.min(Math.max(.125, scale), 4);

        // // Apply scale transform
        // el.style.transform = `scale(${scale})`;
        defaultPosition = [-7, 0.5, 0]
    }
    let scale = 1;
    const el = document.querySelector('Canvas');
    el.onwheel = zoom;

    // useFrame((state, delta) => {
    //     el.onwheel = zoom;
    // })
    return (
        <>
            <OrbitControls
                // enableRotate={false}
                // enableZoom={false}
                // enablePan={false}
                target={[1, 1, 0]}
                maxPolarAngle={1.45}
                 />

            <PerspectiveCamera makeDefault fov={75} position={defaultPosition} />
            
            <color args={[0, 0, 0]} attach="background" />

            <Car />

            <Building />

            <spotLight
                color={[1, 0.25, 0.7]}    
                intensity={1.5}
                angle={0.5}
                penumbra={0.5}
                position={[5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />

            <spotLight
                color={[0.14, 0.5, 1]}
                intensity={2}
                angle={0.6}
                penumbra={0.5}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />

            {/* <BackEffect /> */}

            {/* <directionalLight
                color={[1, 1, 1]}
                intensity={2}
                angle={0.6}
                penumbra={0.5}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            /> */}
            
            <Ground />
        </>
    )
}

export function CarModel() {
    return (
        <Suspense fallback={null}>
            <Canvas shadows>
                <CarShow />
            </Canvas>
        </Suspense>
    )
}
