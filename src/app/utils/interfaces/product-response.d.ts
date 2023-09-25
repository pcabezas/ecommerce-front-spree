import { ProductAttr } from './product';
import { IRelationships } from './relationships';

export interface Data {
  id: string;
  type: string;
  attributes: ProductAttr;
  relationships: IRelationships;
}

export interface ProductResponse {
  data: Data;
  included: Included[];
}
