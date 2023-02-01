export const Placeholder = () => {
  return (
    <mesh position-y={0} scale={0.3}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshBasicMaterial wireframe color="red" />
    </mesh>
  );
};
