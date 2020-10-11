import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Sky } from 'drei';
import { Vector3 } from 'three';
import { Physics } from 'use-cannon';
import { Camera } from './Camera';
import { Ground } from './Ground';
import { Player } from './Player';

function App() {
  return (
    <Canvas>
      <Camera fov={50} />
      <Sky sunPosition={new Vector3(100, 10, 1000)}>
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={.8} position={[100, 100, 100]} />
        <Physics>
          <Ground />
          <Player />
        </Physics>
      </Sky>
    </Canvas>
  );
}

export default App;
