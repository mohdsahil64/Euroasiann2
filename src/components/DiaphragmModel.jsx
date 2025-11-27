import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import '../styles/DiaphragmModel.css'

const Model = () => {
  const ref = useRef();
  const { scene, animations } = useGLTF('/models/diaphragm.glb');
  const mixer = useRef();

  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
        action.setLoop(THREE.LoopRepeat);
      });
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive
  ref={ref}
  object={scene}
  scale={0.6}
  rotation={[0, Math.PI / 2, 0]} // Y-axis pe 180° ghoomaya
/>
};

const DiaphragmModel = () => {
  return (
    <div className="model-wrapper">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} />
        <Suspense fallback={null}>
          <Environment preset="warehouse" background={false} />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DiaphragmModel;
