import { LayoutRectangle } from "react-native";

interface IShopOpeningHours {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

export interface IShopRecord {
  key: string;
  image: string;
  title: string;
  openingHours: IShopOpeningHours;
  description: string;
  rating: number;
  atLevels: string[];
  promos?: string[];
}

export interface IShopList {
  escalator_b: IShopRecord;
  petal: IShopRecord;
  yoga: IShopRecord;
  juice: IShopRecord;
  gelato: IShopRecord;
  travel: IShopRecord;
  lingerie: IShopRecord;
  cell: IShopRecord;
  accessories: IShopRecord;
  bakery: IShopRecord;
  toys: IShopRecord;
  seating: IShopRecord;
  caviard: IShopRecord;
  mexhut: IShopRecord;
  sarnie: IShopRecord;
  paper: IShopRecord;
  page: IShopRecord;
  amore: IShopRecord;
  department: IShopRecord;
  treatment: IShopRecord;
  toilets: IShopRecord;
  manager: IShopRecord;
  escalator_a: IShopRecord;
}

// TODO make this type dynamic based on the
// values of LEVELS array

export interface IShopSearchResult {
  [x: string]: string[];
}

export type NavToShopIdFunc = (shopKey: string) => void;

export interface ISvgComponentProps {
  navigateToShopId: NavToShopIdFunc;
  highlightedShops: string[];
  layout: LayoutRectangle;
}
