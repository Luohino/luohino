import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, MeshDistortMaterial, Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface AnimatedMeshProps {
  position: [number, number, number];
  color: string;
  type: 'sphere' | 'box' | 'torus';
}

const AnimatedMesh = ({ position, color, type }: AnimatedMeshProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  const geometry = () => {
    switch (type) {
      case 'sphere':
        return <Sphere args={[1, 32, 32]} />;
      case 'box':
        return <Box args={[1.5, 1.5, 1.5]} />;
      case 'torus':
        return <Torus args={[1, 0.4, 16, 100]} />;
      default:
        return <Sphere args={[1, 32, 32]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        {geometry()}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen relative"
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
        
        {/* Interactive 3D Objects */}
        <AnimatedMesh position={[-3, 2, 0]} color="#00d4ff" type="sphere" />
        <AnimatedMesh position={[3, -2, 0]} color="#8b5cf6" type="box" />
        <AnimatedMesh position={[0, 0, -2]} color="#f59e0b" type="torus" />
        
        {/* Environment and Controls */}
        <Environment preset="city" />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minDistance={3}
          maxDistance={15}
        />
      </Canvas>
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
    </motion.div>
  );
};

export default Scene3D;