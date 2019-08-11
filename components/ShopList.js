import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableHighlight,
  TextInput
} from "react-native";

const { width, height } = Dimensions.get("window");
import theme from "./theme";

import { Button, IconButton } from "react-native-paper";

export const SHOP_LIST = {
  woolworths: {
    key: "woolworths",
    image:
      "https://yt3.ggpht.com/-biCdK_wbzlE/AAAAAAAAAAI/AAAAAAAAAAA/kRjWujc60X8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    title: "WoolWorths",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed"
    },
    description:
      "The first Woolworths store opened its doors to the public in Cape Town in October 1931. And it was founder Max Sonnenberg who captured the public’s imagination with dynamic store policies that set Woolworths apart from its competitors. Three years later, a second branch opened in Durban, with another two in Port Elizabeth and Johannesburg a year later. And since then we’ve been building on our reputation for superior quality, exciting innovation and excellent value.",
    rating: 3,
    promos: [
      require("../img/promos/ww0.png"),
      require("../img/promos/ww1.png"),
      require("../img/promos/ww2.png"),
      require("../img/promos/ww3.png")
    ]
  },
  checkers: {
    key: "checkers",
    image:
      "http://www.food-blog.co.za/wp-content/uploads/2014/04/CheckersLOGO3.jpg",
    title: "Checkers",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed"
    },
    description:
      "Visit Checkers for quality products at supermarket prices – including gourmet coffees, international & local wines, a world of cheese & a renowned butchery.",
    rating: 3
  },
  dischem: {
    key: "dischem",
    image:
      "http://www.youthvillage.co.za/wp-content/uploads/2016/02/Dis-chem.jpg",
    title: "Dis-Chem",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed"
    },
    description:
      "Since 1978, Dis-Chem has been South Africa’s first choice in pharmacies, and no wonder, with our linked dispensaries, family clinics, comprehensive self-medication centres and so much more. As a leading specialist in beauty, health food, sport supplements, health and well-being, Dis-Chem offers the widest ranges in these categories, along with expert advice, our famously competitive prices, and our Benefits programme, which rewards customers and gives back to the community through the Dis-Chem Foundation.",
    rating: 3
  },
  forever21: {
    key: "forever21",
    image:
      "http://media.bizj.us/view/img/2634601/nfolm-forever21-logo*1200xx1200-675-0-63.jpg",
    title: "Forever 21",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed"
    },
    description:
      "Forever 21 is the authority on fashion & the go-to retailer for the latest trends, must-have styles & the hottest deals. Shop dresses, tops, tees, leggings & more.",
    rating: 3
  },
  foodcourt: {
    key: "foodcourt",
    image:
      "http://www.capetown.travel/wp-content/uploads/2016/07/Canal-Walk-Food-Court.jpg",
    title: "Food Court",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed"
    },
    description: "",
    rating: 3
  },
  wonderland: {
    key: "wonderland",
    image: require("../img/logosquare.png"),
    title: "Wonderland",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed"
    },
    description: "",
    rating: 3
  },
  dionwired: {
    key: "dionwired",
    image:
      "http://editmicro.co.za/wp-content/uploads/2014/01/dionwired-special-needs-project.jpg ",
    title: "Dion Wired",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed"
    },
    description:
      "DionWired is South Africa's premier consumer electronics & appliances store aimed at getting you CONNECTED!",
    rating: 3
  },
  picknpay: {
    key: "picknpay",
    image:
      "https://pbs.twimg.com/profile_images/792082584448761856/gqcauGGR.jpg",
    title: "Pick n Pay",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed"
    },
    description:
      "Pick n Pay is the quintessential family store focused on the customer. Since 1967 when consumer champion Raymond Ackerman purchased the first few stores, the Ackerman family’s vision has grown and expanded to now encompass stores in South Africa, Namibia, Botswana, Zambia, Mozambique, Mauritius, Swaziland and Lesotho.",
    rating: 3,
    promos: [
      require("../img/promos/pnp0.png"),
      require("../img/promos/pnp1.png")
    ]
  },
  edgars: {
    key: "edgars",
    image:
      "https://onlineloanapplication.co.za/wp-content/uploads/2015/10/Edgars-Personal-Loans.jpg",
    title: "Edgars",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed"
    },
    description:
      "Edgars is a national department store serving middle and upper income families of southern Africa with value priced essentials, bona fide national and international brands and appropriate fashion. It aims to be the retail service leader in clothing, footwear, textiles, accessories and cosmetics with more than 150 facias, and over 5000 employees.",
    rating: 3
  },
  stuttafords: {
    key: "stuttafords",
    image:
      "http://www.graziadaily.co.za/wp-content/uploads/2013/12/stuttafords13.png",
    title: "Stuttafords",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed"
    },
    description:
      "Stuttafords is a high-end retailer of branded fashion, apparel, footwear, accessories and cosmetics, within premium shopping malls in South Africa.",
    rating: 3
  },
  toysrus: {
    key: "toysrus",
    image:
      "https://www.360vouchercodes.co.uk/files/wysiwyg/toysrus-logo-large.png",
    title: "Toys R Us",
    openingHours: {
      Monday: "9am–5pm",
      Tuesday: "9am–6pm",
      Wednesday: "9:30am–6pm",
      Thursday: "9am–6pm",
      Friday: "9am–7pm",
      Saturday: "9am–6pm",
      Sunday: "Closed"
    },
    description:
      "Here at Toys R Us, we have a huge range of kids' toys & games including outdoor toys, arts & crafts, action figures and more.",
    rating: 3
  }
};

const PADDING = 40;
const INDICATOR_CONTAINER_HEIGHT = 2;
const INDICATOR_CONTAINER_WIDTH = width - PADDING * 2;
const INDICATOR_WIDTH =
  INDICATOR_CONTAINER_WIDTH / Object.keys(SHOP_LIST).length;

export default class ShopList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedId: 0,
      scrollX: new Animated.Value(0),
      indicator: new Animated.Value(1),
      viewType: "cards",
      searchQuery: ""
    };
  }

  render() {
    return (
      <View style={[theme.container, theme.bg]}>
        {this.state.viewType == "cards" ? (
          <Animated.ScrollView
            pagingEnabled
            scrollEventThrottle={16}
            contentContainerStyle={[ss.contentContainer]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }],
              { useNativeDriver: true }
            )}
          >
            {Object.keys(SHOP_LIST).map((shop, index) =>
              this._renderCard(SHOP_LIST[shop], index)
            )}
          </Animated.ScrollView>
        ) : (
          <View style={{ height: height - 124 }}>
            <View
              style={{
                marginTop: 8,
                marginLeft: 10,
                marginRight: 100,
                padding: 5,
                paddingLeft: 15,
                borderColor: "grey",
                borderRadius: 50,
                borderWidth: 1
              }}
            >
              <TextInput
                underlineColorAndroid="rgba(0,0,0,0)"
                ref={component => (this._textInput = component)}
                style={{ fontSize: 20 }}
                onChangeText={e => {
                  this.setState({
                    searchQuery: e.replace(/ /g, "").toLowerCase()
                  });
                }}
                placeholder="Search"
              />
              <IconButton
                style={{
                  position: "absolute",
                  color: "grey",
                  right: 5,
                  top: 4,
                  fontSize: 30
                }}
                onPress={this.clearText}
                icon="clear"
              />
            </View>
            <ScrollView style={{ width: width }}>
              {Object.keys(SHOP_LIST)
                .filter(name => {
                  return name.includes(this.state.searchQuery);
                })
                .map((shop, index) => this._renderRow(SHOP_LIST[shop], index))}
            </ScrollView>
          </View>
        )}
        <IconButton
          style={ss.addButton}
          icon={this.state.viewType == "cards" ? "list" : "view-carousel"}
          onPress={() => {
            this.setState({
              viewType: this.state.viewType == "cards" ? "list" : "cards"
            });
          }}
          size={30}
          color="white"
        />
        {this.state.viewType == "cards" ? (
          <Animated.View style={ss.indicatorContainer}>
            <Animated.View
              style={[ss.indicator, { left: this.state.indicator }]}
            />
          </Animated.View>
        ) : null}
        {this._renderPageFooter()}
      </View>
    );
  }

  componentDidMount() {
    this.state.scrollX.addListener(this.updateView.bind(this));
  }

  updateView(offset) {
    let currentIndex = offset.value / width;
    if (offset.value < 0) {
      currentIndex = 0;
    } else if (offset.value > (Object.keys(SHOP_LIST).length - 1) * width) {
      currentIndex = Object.keys(SHOP_LIST).length - 1;
    }

    this.state.indicator.setValue(currentIndex * INDICATOR_WIDTH);
  }

  _renderCard(shop, i) {
    let inputRange = [
      (i - 1) * width,
      i * width,
      (i + 1) * width,
      (i + 2) * width
    ];

    return (
      <View style={[theme.container, ss.shopItem]} key={i}>
        <View style={ss.innerContainer}>
          <Animated.Image
            source={
              typeof shop.image == "string" ? { uri: shop.image } : shop.image
            }
            style={[
              theme.image,
              {
                transform: [
                  {
                    scale: this.state.scrollX.interpolate({
                      inputRange,
                      outputRange: [0.3, 1, 0.3, 0.3]
                    })
                  }
                ]
              }
            ]}
          />
          <Text
            style={[
              // theme.customFont,
              theme.title,
              { margin: 20 }
            ]}
          >
            {shop.title}
          </Text>

          {this._renderShopFooter(shop.key, i)}
        </View>
      </View>
    );
  }

  _renderRow(shop, i) {
    return (
      <TouchableHighlight key={i} onPress={() => this.onShopSelect(shop.key)}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "lightgrey",
            width: width - 6,
            marginHorizontal: 3,
            marginVertical: 1
          }}
        >
          <Image
            source={
              typeof shop.image == "string" ? { uri: shop.image } : shop.image
            }
            style={{ height: 40, width: 40, borderRadius: 20, marginLeft: 20 }}
          />
          <Text
            style={[
              // theme.customFont,
              theme.title,
              { margin: 20 }
            ]}
          >
            {shop.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
  //   <Components.LinearGradient
  //             colors={['#e6e6e6', 'white', 'white', '#e6e6e6']}
  //             style={{flexDirection:'row', alignItems: 'center'}}>
  // </Components.LinearGradient>

  _renderShopFooter(shopkey, i) {
    return (
      <View key={i} style={[theme.groupButton, ss.footer]}>
        <Button
          onPress={() => this.onShopSelect(shopkey)}
          color="black"
          mode="contained"
        >
          View Details
        </Button>
      </View>
    );
  }

  _renderPageFooter() {
    return (
      <View style={[theme.groupButton, ss.footer]}>
        <Button onPress={() => this.goBack()} color="black" mode="contained">
          Return to Map
        </Button>
      </View>
    );
  }

  goBack() {
    this.props.navigation.goBack();
  }

  onShopSelect(shopkey) {
    this.props.navigation.navigate("ShopDetails", { shopkey });
  }
}

const ss = StyleSheet.create({
  addButton: {
    backgroundColor: "#3cbc8d",
    height: 80,
    width: 80,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 8,
    right: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  innerContainer: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: "#ffffff"
  },
  shopItem: {
    width: width,
    padding: 40
  },
  footer: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    overflow: "hidden",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0"
  },
  indicator: {
    width: INDICATOR_WIDTH,
    height: INDICATOR_CONTAINER_HEIGHT,
    position: "absolute",
    top: 0,
    backgroundColor: "#c0c0c0"
  },
  indicatorContainer: {
    height: INDICATOR_CONTAINER_HEIGHT,
    marginVertical: 20,
    backgroundColor: "#ededed",
    position: "relative",
    width: INDICATOR_CONTAINER_WIDTH,
    paddingHorizontal: PADDING
  }
});
