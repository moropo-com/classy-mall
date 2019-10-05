import { LEVELS, SHOPS_LL, SHOPS_UL } from '../constants/constants';

const filterShopsByTitle = (searchTerm, shopList) => shopList.filter(shop => shop.title.toLowerCase().includes(searchTerm.toLowerCase()));

export const searchShopsTitles = (searchTerm, shopsLL = SHOPS_LL, shopsUL = SHOPS_UL) => ({
    [LEVELS.LL]: filterShopsByTitle(searchTerm, shopsLL).map(shop => shop.key),
    [LEVELS.UL]: filterShopsByTitle(searchTerm, shopsUL).map(shop => shop.key)
});
