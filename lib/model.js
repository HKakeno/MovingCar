import { useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useEffect } from 'react'
import { RepeatWrapping } from 'three'
import { LinearEncoding } from 'three'

export function loadGLTFModel(
  scene,
  glbPath,
  camera,
  renderer,
  options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {

    const [roughness, normal] = useLoader( TextureLoader, [
        "FourLaneRoadWet01_4K_Roughness.png",
        "/FourLaneRoadWet01_4K_Normal.png"
    ])

    useEffect(() => {
        [normal, roughness].forEach((t) => {
            t.wrapS = RepeatWrapping
            t.wrapT = RepeatWrapping
            t.repeat.set(5, 5)
        })

        normal.encoding = LinearEncoding
    }, [normal, roughness])

    const planeGeometry = new THREE.PlaneGeometry(30, 30)
    const meshReflectorMaterial = new THREE.MeshStandardMaterial()
    meshReflectorMaterial.roughness = "0.7"
    meshReflectorMaterial.blur = 1000, 400
    const mesh = new THREE.Mesh(planeGeometry, meshReflectorMaterial)
    scene.add(mesh)


    // 環境光
    const light = new THREE.DirectionalLight(0X7A96E9)
    const light2 = new THREE.DirectionalLight(0xFFFFFF)
    light.intensity = 2
    light.position.set(8, 6, 1)
    light2.intensity = 10
    light2.castShadow = true
    light2.position.set(18, 20, 3)
    scene.background = new THREE.Color(0X000000)
    scene.add(light)
    scene.add(light2)

    const boxGeometry = new THREE.TorusKnotGeometry(3, 1, 100, 16)
    const material = new THREE.MeshStandardMaterial( {color: 0xaa0000} )
    const cube = new THREE.Mesh( boxGeometry, material )
    cube.castShadow = true
    cube.receiveShadow = true
    // scene.add(cube)
    
    const loader = new GLTFLoader()
    const clock = new THREE.Clock()
    const controls = new OrbitControls(camera, renderer.domElement)
    let mixer

    
    animate()
    
    



    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'road'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        // scene.add(obj)

        mixer = new THREE.AnimationMixer(obj)
        camera.position.z = 5
        camera.position.x = 3
        camera.position.y = 2
        camera.focus = 100
        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
        animate()
      },
      undefined,
      function (error) {
        reject(error)
      }
    )

    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);
        controls.update();
        renderer.render(scene, camera);
    }
  })
}