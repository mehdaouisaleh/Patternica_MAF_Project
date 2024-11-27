import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  useGLTF,
  Environment,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
  useTexture,
} from "@react-three/drei";
import { mesh } from "three";

import "./styles.css";
import { useRef } from "react";

export const App = ({ position = [-6, 0, 10], fov = 15 }) => (
  <Canvas
    style={{ background: "" }}
    shadows
    eventSource={document.getElementById("root")}
    eventPrefix="client"
    camera={{ position, fov }}
  >
    <ambientLight intensity={0.4} /> <Environment preset="city" />
    <Center>
      <Shirt />
      <Backdrop />
    </Center>
    <OrbitControls />
  </Canvas>
);

function Shirt(props) {
  const { nodes, materials } = useGLTF("/shirt_6.glb");
  const texture = useTexture("pattern.jpg");
  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Object_8.geometry}
        material={materials["material.004"]}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 5]}
        scale={0.236}
      ></mesh>
    </group>
    // <mesh
    //   castShadow
    //   receiveShadow
    //   geometry={nodes.Gothic_blouse_top_0.geometry}
    //   material={materials.material}
    //   position={[0, 0.727, 0]}
    //   rotation={[-Math.PI / 2, 0, -1]}
    //   scale={10}
    //   {...props}
    //   dispose={null}
    // >
    /* <Decal
        position={[0, 0.05, 0]}
        rotation={[0, 0, 0]}
        scale={0.15}
        opacity={0.7}
        map={texture}
      />
      <Decal
        position={[0.1, 0.045, 0]}
        rotation={[0, 0, -0.07]}
        scale={[0.1, 0.1, 0.4]}
        map={texture}
      />
      <Decal
        position={[-0.1, -0.045, 0]}
        rotation={[0.5, 0.1, 0.4]}
        scale={[0.1, 0.1, 0.4]}
        map={texture}
      /> */
    // </mesh>
  );
}

function Backdrop() {
  return (
    <AccumulativeShadows
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 1]}
      position={[0, 0, -1.22]}
    >
      <RandomizedLight
        amount={10}
        radius={30}
        intensity={4.2}
        ambient={0.15}
        position={[9, 5, -9]}
      />
    </AccumulativeShadows>
  );
}

useGLTF.preload("/shirt.glb");
