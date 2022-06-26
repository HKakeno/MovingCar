import React, { useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Mesh } from 'three'

export function Car() {
    const gltf = useLoader(
        GLTFLoader,
        "/car/scene.gltf"
    )

    useEffect(() => {
        gltf.scene.scale.set(0.35, 0.35, 0.35)
        gltf.scene.position.set(0, 0.37, 0.9)
        gltf.scene.rotation.set(0, 1.57, 0)
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true
                object.receiveShadow
                object.material.envMapIntensity = 20
            }
        })
    }, [gltf])

    useFrame((state, delta) => {
        let t = state.clock.getElapsedTime()

        let group = gltf.scene.children[0].children[0].children[0]
        group.children[72].rotation.x = t * 3.6
        group.children[73].rotation.x = t * 3.6
        group.children[74].rotation.x = t * 3.6
        group.children[75].rotation.x = t * 3.6
        group.children[76].rotation.x = t * 3.6
        group.children[77].rotation.x = t * 3.6
        group.children[78].rotation.x = t * 3.6
        group.children[79].rotation.x = t * 3.6
        group.children[80].rotation.x = t * 3.6
        group.children[81].rotation.x = t * 3.6
        group.children[82].rotation.x = t * 3.6
        group.children[83].rotation.x = t * 3.6
        // group.children[84].rotation.x = t * 2
        group.children[85].rotation.x = t * 3.6
        group.children[86].rotation.x = t * 3.6
        group.children[87].rotation.x = t * 3.6
    })

    return <primitive object={gltf.scene} />
}