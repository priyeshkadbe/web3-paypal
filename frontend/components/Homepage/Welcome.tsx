function Welcome() {
  console.log(process.env.NEXT_PUBLIC_ALCHEMY_ID);
  // const alchemyId = process.env.ALCHEMY;

  // console.log("hey", alchemyId);
  return (
    <h1>Connected to {process.env.NEXT_PUBLIC_ALCHEMY_ID} hello</h1>
  );
}

export default Welcome;
