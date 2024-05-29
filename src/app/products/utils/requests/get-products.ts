import { StandardResponse } from '@/app/utils/interfaces/standard-response';

export const getProducts = async (
  includes?: Array<string>,
): Promise<StandardResponse> => {
  let includeParams = '';
  if (includes) {
    for (const index in includes) {
      includeParams.length == 0
        ? (includeParams += `include=${includes[index]}`)
        : (includeParams += `,${includes[index]}`);
    }
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?${includeParams}`,
  );
  return res.json();
};
