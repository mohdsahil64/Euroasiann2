import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function CargoShipModel() {
  const model = useGLTF('/models/ship.glb');
  const ref = useRef();

  // Auto-rotate the model
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005; // slow rotation
    }
  });

  return <primitive object={model.scene} ref={ref} scale={window.innerWidth < 768 ? 0.3 : 0.5} />;
}

export default function ModelViewer() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <CargoShipModel />
        {/* No OrbitControls — disables zoom/pan/drag */}
      </Canvas>
    </div>
  );
}
