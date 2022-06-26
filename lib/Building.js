import React, { useRef, useState, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh } from 'three'

export function Building() {
    const gltf = useLoader(
        GLTFLoader,
        "/building/scene.gltf"
    )
    const time = useRef(0)
    const position = [0, -0.02, -4.6]

    useEffect(() => {
        gltf.scene.scale.set(0.05, 0.05, 0.05)
        gltf.scene.position.set(0, -0.02, -4.6)
        gltf.scene.rotation.set(0, 0, 0)
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true
                object.receiveShadow = true
                object.material.envMapIntensity = 20
            }
        })
    }, [gltf])

    useFrame((state, delta) => {
        time.current += delta * 1.72
        let newX = position[0] - (time.current)
        if (newX < -15) {
            time.current = 0
        }
        // const elapsed = state.clock.getElapsedTime() * 0.228
        // gltf.scene.traverse((object) => {
        //     if (object instanceof Mesh) {
        //         object.current.position.set(newX, -0.02, -4.6)
        //     }
        // })
        gltf.scene.position.set(newX, -0.02, -4.6)
    })

    return <primitive object={gltf.scene} />
}