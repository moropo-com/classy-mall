type OpeningHours = {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
};

export type ShopRecord = {
  key: string;
  image: string;
  title: string;
  openingHours: OpeningHours;
  description: string;
  rating: number;
  atLevels: string[];
  promos?: string[];
};

export type ShopList = {
  orangecafe: ShopRecord;
  tattooparlour: ShopRecord;
  gardenshops: ShopRecord;
  floraver21: ShopRecord;
  foodcourt: ShopRecord;
  wonderland: ShopRecord;
  shoes: ShopRecord;
  bikeshop: ShopRecord;
  babies: ShopRecord;
  tea: ShopRecord;
  artsncrafts: ShopRecord;
};

// 2do: make this type dynamic based on the
// values of LEVELS array

export type ShopSearchResult = {
  [x: string]: string[];
};

export type NavToShopIdFunc = (shopKey: string) => void;

export type SvgComponentProps = {
  navigateToShopId: NavToShopIdFunc;
  highlightedShops: string[];
};
