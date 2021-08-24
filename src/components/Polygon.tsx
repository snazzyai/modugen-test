import React from 'react';
import { PolygonProps } from '../interfaces/IPolygon';
// import { PerspectiveCamera } from "@react-three/drei";
// import Points from "../polygons.json";
// import { Canvas, useFrame } from "@react-three/fiber";

const Polygon: React.FC<PolygonProps> = ({
  vertices,
  position,
}: PolygonProps) => {
  const polygonVertices = new Float32Array(vertices);

  return (
    <mesh position={position} scale={1}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          array={polygonVertices}
          itemSize={3}
          count={polygonVertices.length / 3}
        />
      </bufferGeometry>
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Polygon;
