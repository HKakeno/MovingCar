import React, { useRef, useState, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Vector3 } from "three";

export function BackEffect() {

    return (
        <mesh 
            position={[0, 1, 0]}>
            <octahedronGeometry args={[0.1, 1]} />
            <meshStandardMaterial />
        </mesh>
        
    )
}