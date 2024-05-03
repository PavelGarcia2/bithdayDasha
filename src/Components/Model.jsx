
import React, { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

export default function Model(props) {
    const gltf = useLoader(GLTFLoader, '/src/assets/scene.gltf')

  return (
    <primitive
        object={gltf.scene}
        position={[0, -2, -4]}
        children-0-castShadow
      />
  )
}

