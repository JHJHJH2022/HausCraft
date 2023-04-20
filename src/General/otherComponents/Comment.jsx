import { Html } from "@react-three/drei";

export default function Comment() {
  return (
    <>
      <Html
        wrapperClass="label"
        position={[40, -5, 0]}
        center
        distanceFactor={0.2}
        className=" bg-black/70 rounded-full text-white text-xs p-4 whitespace-nowrap "
      >
        &#129409; Mr Ng :<br></br>Please adjust building orientation.
      </Html>

      <Html
        wrapperClass="label"
        position={[-30, 0, -10]}
        center
        distanceFactor={0.2}
        className=" bg-black/70 rounded-full text-white text-xs p-4 whitespace-nowrap "
      >
        &#129409; Mr Ng :<br></br>Please adjust building orientation.
      </Html>

      <Html
        wrapperClass="label"
        position={[10, -5, -100]}
        center
        distanceFactor={0.2}
        className=" bg-black/70 rounded-full text-white text-xs p-4 whitespace-nowrap "
      >
        &#129409; Mr Ng :<br></br>Please adjust building orientation.
      </Html>

      <Html
        wrapperClass="label"
        position={[100, -5, -60]}
        center
        distanceFactor={0.2}
        className=" bg-black/70 rounded-full text-white text-xs p-4 whitespace-nowrap "
      >
        &#129409; Mr Ng :<br></br>Please adjust building orientation.
      </Html>

      <Html
        wrapperClass="label"
        position={[60, -5, -120]}
        center
        distanceFactor={0.2}
        className=" bg-black/70 rounded-full text-white text-xs p-4 whitespace-nowrap "
      >
        &#129409; Mr Ng :<br></br>Please adjust building orientation.
      </Html>
    </>
  );
}
