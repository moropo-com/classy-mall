import { Dimensions } from "react-native";
import { IShopList } from "../types";

export const LEVELS: { UL: string; LL: string } = {
  LL: "LL",
  UL: "UL",
};

export const LEVEL_VALUES = Object.values(LEVELS);
const { height: windowHeight, width: windowWidth } = Dimensions.get("window");
export const SHOP_LIST: IShopList = {
  orangecafe: {
    key: "orangecafe",
    height: "5%",
    width: "25%",
    top: "40%",
    left: "30%",
    image: require("../../assets/img/promos/orange/main.jpg"),
    title: "Orange Cafe",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed",
    },
    description: "Oranges for everyone, a great source of vitamin C",
    rating: 3,
    promos: [
      require("../../assets/img/promos/orange/1.jpg"),
      require("../../assets/img/promos/orange/2.jpg"),
      require("../../assets/img/promos/orange/3.jpg"),
    ],
    atLevels: [LEVELS.LL, LEVELS.UL],
  },
  tattooparlour: {
    key: "tattooparlour",
    height: "10%",
    width: "25%",
    top: "5%",
    left: "30%",
    image: require("../../assets/img/promos/tattoo/main.jpg"),
    title: "Tattoo Parlour",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed",
    },
    description: "Tattoo Parlour, great colours and lines ",
    rating: 3,
    atLevels: [LEVELS.LL],
  },
  gardenshops: {
    key: "gardenshops",
    height: "15%",
    width: "30%",
    top: "20%",
    left: "5%",
    image: require("../../assets/img/promos/garden/main.jpg"),
    title: "Garden Stores",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed",
    },
    description: "Create the yard and garden of your dreams.",
    rating: 3,
    atLevels: [LEVELS.LL],
  },
  floraver21: {
    key: "floraver21",
    height: "5%",
    width: "15%",
    top: "35%",
    left: "40%",
    image: require("../../assets/img/promos/flower/main.jpg"),
    title: "Floraver 21",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed",
    },
    description:
      "Floraver 21 is the authority on flowers & the go-to florist for the latest trends, must-have bouquets & the hottest deals.",
    rating: 3,
    atLevels: [LEVELS.LL],
  },
  foodcourt: {
    key: "foodcourt",
    height: "15%",
    width: "25%",
    top: "40%",
    left: "70%",
    image: require("../../assets/img/promos/foodcourt/main.jpg"),
    title: "Food Court",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed",
    },
    description: "",
    rating: 3,
    atLevels: [LEVELS.LL, LEVELS.UL],
  },
  wonderland: {
    key: "wonderland",
    height: "20%",
    width: "25%",
    top: "50%",
    left: "5%",
    image: require("../../assets/img/square.png"),
    title: "Wonderland",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed",
    },
    description: "",
    rating: 3,
    atLevels: [LEVELS.LL, LEVELS.UL],
  },
  shoes: {
    key: "shoes",
    height: "15%",
    width: "15%",
    top: "25%",
    left: "70%",
    image: require("../../assets/img/promos/shoes/main.jpg"),
    title: "Shoes!",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed",
    },
    description: "Shoes!",
    rating: 3,
    atLevels: [LEVELS.LL],
  },
  bikeshop: {
    key: "bikeshop",
    height: "20%",
    width: "30%",
    top: "5%",
    left: "55%",
    image: require("../../assets/img/promos/bike/main.jpg"),
    title: "Bike shop",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed",
    },
    description: "Tools, wheels and bikes",
    rating: 3,
    promos: [
      require("../../assets/img/promos/bike/1.jpg"),
      require("../../assets/img/promos/bike/2.jpg"),
    ],
    atLevels: [LEVELS.LL, LEVELS.UL],
  },
  babies: {
    key: "babies",
    height: "8%",
    width: "20%",
    top: "50%",
    left: "50%",
    image: require("../../assets/img/promos/babies/main.jpg"),
    title: "Babies",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed",
    },
    description: "Please we are not prepared for the new borns",
    rating: 3,
    atLevels: [LEVELS.LL],
  },
  tea: {
    key: "tea",
    height: "8%",
    width: "20%",
    top: "12%",
    left: "5%",
    image: require("../../assets/img/promos/tea/main.jpg"),
    title: "Tea me meet again",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed",
    },
    description: "Catch up and have a cup of tea",
    rating: 3,
    atLevels: [LEVELS.LL],
  },
  artsncrafts: {
    key: "artsncrafts",
    height: "8%",
    width: "20%",
    top: "50%",
    left: "30%",
    image: require("../../assets/img/promos/art/main.jpg"),
    title: "Arts n Crafts",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed",
    },
    description:
      "Here at Arts n Craft, we have a huge range of kids' finger paints including crayons, arts & crafts, paper and more.",
    rating: 3,
    atLevels: [LEVELS.LL],
  },
};

export const SHOPS_UL = Object.values(SHOP_LIST).filter((shop) =>
  shop.atLevels.includes(LEVELS.UL)
);
export const SHOPS_LL = Object.values(SHOP_LIST).filter((shop) =>
  shop.atLevels.includes(LEVELS.LL)
);
