import { LEVELS, SHOPS_LL, SHOPS_UL } from '../constants/shopList';
import { IShopRecord, IShopSearchResult } from '../types';

const filterShopsByTitle = (searchTerm:string, shopList: IShopRecord[]) => shopList.filter(shop => shop.title.toLowerCase().includes(searchTerm.toLowerCase()));

export const searchShopsTitles = (searchTerm, shopsLL = SHOPS_LL, shopsUL = SHOPS_UL): IShopSearchResult => ({
    [LEVELS.LL]: filterShopsByTitle(searchTerm, shopsLL).map(shop => shop.key),
    [LEVELS.UL]: filterShopsByTitle(searchTerm, shopsUL).map(shop => shop.key)
});
