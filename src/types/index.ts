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
  shopCodes: string[];
}

export interface IShopList {
  orangecafe: IShopRecord;
  tattooparlour: IShopRecord;
  gardenshops: IShopRecord;
  floraver21: IShopRecord;
  foodcourt: IShopRecord;
  wonderland: IShopRecord;
  shoes: IShopRecord;
  bikeshop: IShopRecord;
  babies: IShopRecord;
  tea: IShopRecord;
  artsncrafts: IShopRecord;
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
}
