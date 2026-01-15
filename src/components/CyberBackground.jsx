import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, Stars, PerspectiveCamera, Environment } from '@react-three/drei';
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Noise,
} from '@react-three/postprocessing';
import { useRef } from 'react';
import * as THREE from 'three';

const MovingGrid = () => {
  const gridRef = useRef(null);
  useFrame((state, delta) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 1;
    }
  });

  return (
    <group ref={gridRef}>
      <Grid
        position={[0, -1, 0]}
        args={[20, 20]} // Size
        cellSize={0.5}
        cellThickness={1}
        cellColor="#00ffff"
        sectionSize={2.5}
        sectionThickness={1.5}
        sectionColor="#ff00ff"
        fadeDistance={15}
        fadeStrength={1}
        followCamera={false}
        infiniteGrid={true}
      />
    </group>
  );
};

const FloatingParticles = () => {
  const ref = useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  return (
    <group ref={ref}>
      <Stars
        radius={50}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
};

const CyberBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas gl={{ antialias: false }}>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={75} />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff00ff" />
        <pointLight position={[-10, 10, -10]} intensity={1} color="#00ffff" />

        {/* Objects */}
        <MovingGrid />
        <FloatingParticles />

        {/* Post Processing */}
        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0}
            mipmapBlur
            intensity={0.5}
            radius={0.8}
          />
          <ChromaticAberration offset={[0.002, 0.002]} />
          <Noise opacity={0.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default CyberBackground;
