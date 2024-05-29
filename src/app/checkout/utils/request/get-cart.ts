export const getCart = async (cartToken: string, includes: Array<string>) => {
  let includeParams = '';
  for (const index in includes) {
    includeParams.length == 0
      ? (includeParams += `include=${includes[index]}`)
      : (includeParams += `,${includes[index]}`);
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cart?cartToken=${cartToken}&${includeParams}`,
  );
  return res.json();
};
