import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import { Canvas } from '@react-three/fiber'
import {OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import * as THREE from 'three'
import { CarModel } from '../lib/CarModel'

const GroundBlender = () => {
    // const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
    const scene = new THREE.Scene()
    const path = "/road.glb"
    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 )
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize( window.innerWidth, window.innerHeight )
    document.body.appendChild( renderer.domElement )

    loadGLTFModel(scene, path, camera, renderer, {
        receiveShadow: true,
        castShadow: true
    })
    
}

const Page = () => {
    return (
        <Section delay={0.1}>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello
                </Box>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Hiroki Kakeno
                        </Heading>
                        <p>Moving-Car</p>
                    </Box>
                </Box>

                <Box height={400}>
                    <CarModel />
                </Box>
            </Container>
        </Section>
    )
}

export default Page