import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Polygon from "../components/Polygon";
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera
} from "@react-three/drei";
import Points from "../polygons.json";
import { IPoint } from "../interfaces/IPoint";
import Button from "./Button";

const CanvasArea: React.FC<{}> = () => {
  const [pointsOneArray, setPointsOneArray] = useState<Array<number> | null>(
    null
  );
  const [pointsTwoArray, setPointsTwoArray] = useState<Array<number> | null>(
    null
  );
  const [isOrthographic, setIsOrthographic] = useState<boolean>(false);

  function drawRectangleMode(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setIsOrthographic(true);
  }

  function backToGlobal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIsOrthographic(false);
  }

  const pushPoints = (bounding_point: IPoint[]): Array<number> => {
    let arrayOfPoints: Array<number> = [];
    bounding_point?.map((point: IPoint): boolean => {
      arrayOfPoints.push(point.x);
      arrayOfPoints.push(point.y);
      arrayOfPoints.push(point.z);
      return false;
    });
    return arrayOfPoints;
  };

  useEffect((): void => {
    setPointsOneArray(pushPoints(Points[0].bounding_points));
    setPointsTwoArray(pushPoints(Points[1].bounding_points));
  }, []);

  return (
    <>
      <Canvas
        camera={{
          zoom: 20,
          position: [5, 0, 100]
        }}
      >
        <PerspectiveCamera
          position={[0, 0, 2.5]}
          fov={100}
          zoom={1}
          makeDefault={!isOrthographic}
        />
        <OrthographicCamera
          position={[0, 20, 2.5]}
          zoom={20}
          makeDefault={isOrthographic}
        />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          enabled={!isOrthographic}
        />
        <Polygon
          position={new THREE.Vector3(-3, -2, -3)}
          vertices={pointsTwoArray!}
        />
        <Polygon
          position={new THREE.Vector3(0, -2, -4)}
          vertices={pointsOneArray!}
        />
      </Canvas>
      <div>
        <Button
          handleClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            drawRectangleMode(e)
          }
          text="Draw Rectangle"
        />
        <Button
          handleClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            backToGlobal(e)
          }
          text="Back to Global"
        />
      </div>
    </>
  );
};

export default CanvasArea;
