import React  from 'react';
import { RepeatWrapping, TextureLoader } from 'three';
import { usePlane } from 'use-cannon';

export const Ground = (props) => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  const texture = new TextureLoader().load('https://github.com/satansdeer/minecraft-react/blob/master/src/grass.jpg?raw=true');
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(240, 240);
  return <mesh ref={ref} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
    <meshStandardMaterial attach="material" />
  </mesh>
}
