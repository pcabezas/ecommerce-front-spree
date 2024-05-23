export const getCart = async (cartToken: string, includes: Array<string>) => {
  let includeParams = '';
  for (const index in includes) {
    includeParams.length == 0
      ? (includeParams += `include=${includes[index]}`)
      : (includeParams += `,${includes[index]}`);
  }
  console.log("Calling from Client", includeParams)
  const res = await fetch(
    `http://0.0.0.0:3000/api/v1/cart?cartToken=${cartToken}&${includeParams}`,
  );
  return res.json();
};
