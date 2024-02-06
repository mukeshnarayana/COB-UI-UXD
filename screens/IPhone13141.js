import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13141 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.iphone13142}
      locations={[1, 1]}
      colors={["#fff", "rgba(255, 255, 255, 0)"]}
      useAngle={true}
      angle={180}
    >
      <Text style={[styles.menu, styles.menuLayout]}>Menu</Text>
      <Image
        style={styles.iphone13142Child}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={styles.iphone13142Item} />
      <Text style={styles.search}>Search</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.iphone13142Inner, styles.rectangleViewLayout]} />
      <Image
        style={[styles.image1Icon, styles.menuLayout]}
        resizeMode="cover"
        source={require("../assets/image-11.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.iphone13142Child1, styles.iphone13142ChildLayout]} />
      <View style={[styles.iphone13142Child2, styles.iphone13142ChildLayout]} />
      <Text style={[styles.burger, styles.pizzaTypo]}>Burger</Text>
      <Text style={[styles.noodells, styles.pizzaTypo]}>Noodells</Text>
      <Text style={[styles.pizza, styles.pizzaTypo]}>Pizza</Text>
      <Text style={[styles.cheeseBread, styles.pizzaTypo]}>Cheese Bread</Text>
      <Image
        style={[styles.image2Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={[styles.image3Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={[styles.image4Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <Text style={[styles.promotions, styles.popularTypo]}>Promotions</Text>
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.pressableLayout]}
        locations={[1, 1]}
        colors={["#a58afe", "rgba(160, 133, 247, 0)"]}
        useAngle={true}
        angle={112.1}
      />
      <Text style={[styles.todaysOffer, styles.aBoxOfClr]}>Todays Offer</Text>
      <Text style={[styles.aBoxOf, styles.aBoxOfClr]}>A Box Of Fries</Text>
      <Text style={[styles.onAllOrders, styles.aBoxOfClr]}>
        On All Orders Above:$150
      </Text>
      <Text style={[styles.popular, styles.popularTypo]}>Popular</Text>
      <LinearGradient
        style={[styles.wrapper, styles.wrapperLayout]}
        locations={[1, 1]}
        colors={["#eee", "rgba(160, 133, 247, 0)"]}
        useAngle={true}
        angle={112.1}
      >
        <Pressable
          style={[styles.pressable, styles.pressableLayout]}
          onPress={() => navigation.navigate("IPhone13142")}
        />
      </LinearGradient>
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source={require("../assets/image-5.png")}
      />
      <LinearGradient
        style={[styles.iphone13142Child3, styles.wrapperLayout]}
        locations={[1, 1]}
        colors={["rgba(238, 238, 238, 0.93)", "rgba(160, 133, 247, 0)"]}
        useAngle={true}
        angle={112.1}
      />
      <Image
        style={[styles.image6Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-6.png")}
      />
      <Text style={[styles.beefBurger, styles.text2Typo]}>Beef Burger</Text>
      <Text style={[styles.text, styles.textTypo]}>$20</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.image7Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-7.png")}
      />
      <Text style={[styles.cheesPizza, styles.text2Typo]}>Chees Pizza</Text>
      <Text style={[styles.text1, styles.textTypo]}>$30</Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={styles.iphone13142Child4} />
      <Image
        style={styles.homeIcon}
        resizeMode="cover"
        source={require("../assets/home.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.text2, styles.text2Typo]}>1</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    height: 52,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewLayout: {
    height: 72,
    width: 72,
    borderRadius: Border.br_xl,
    top: 177,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  iphone13142ChildLayout: {
    height: 74,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  pizzaTypo: {
    height: 24,
    fontSize: FontSize.size_mini,
    width: 72,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout1: {
    height: 46,
    position: "absolute",
  },
  popularTypo: {
    width: 154,
    fontSize: FontSize.size_5xl,
    height: 29,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  pressableLayout: {
    borderRadius: Border.br_xl,
    backgroundColor: "transparent",
  },
  aBoxOfClr: {
    color: Color.colorWhitesmoke,
    height: 29,
    textAlign: "left",
    position: "absolute",
  },
  wrapperLayout: {
    height: 214,
    width: 161,
    top: 512,
    position: "absolute",
  },
  iconLayout: {
    height: 109,
    position: "absolute",
  },
  text2Typo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    width: 37,
    color: Color.colorGoldenrod,
    top: 697,
    fontSize: FontSize.size_lg,
    height: 29,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  vectorIconPosition: {
    top: "94.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  menu: {
    top: 35,
    fontSize: 40,
    width: 113,
    textAlign: "left",
    color: Color.colorBlack,
    height: 52,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 24,
  },
  iphone13142Child: {
    top: 31,
    left: 307,
    width: 56,
    height: 56,
    position: "absolute",
  },
  iphone13142Item: {
    top: 104,
    borderRadius: Border.br_11xl,
    width: 346,
    height: 60,
    backgroundColor: Color.colorGainsboro_100,
    left: 15,
    position: "absolute",
  },
  search: {
    top: 120,
    left: 73,
    fontSize: FontSize.size_6xl,
    color: Color.colorGray,
    width: 103,
    height: 25,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  vectorIcon: {
    top: "14.22%",
    right: "84.87%",
    bottom: "82.46%",
    left: "7.95%",
    width: "7.18%",
    height: "3.32%",
  },
  iphone13142Inner: {
    left: 24,
    width: 72,
  },
  image1Icon: {
    top: 187,
    left: 38,
    width: 47,
  },
  rectangleView: {
    left: 104,
  },
  iphone13142Child1: {
    width: 68,
    left: 188,
    top: 177,
    height: 74,
  },
  iphone13142Child2: {
    top: 176,
    left: 269,
    width: 67,
  },
  burger: {
    textAlign: "center",
    top: 258,
    height: 24,
    fontSize: FontSize.size_mini,
    left: 28,
  },
  noodells: {
    left: 106,
    textAlign: "center",
    top: 258,
    height: 24,
    fontSize: FontSize.size_mini,
  },
  pizza: {
    textAlign: "center",
    top: 258,
    height: 24,
    fontSize: FontSize.size_mini,
    left: 188,
  },
  cheeseBread: {
    top: 256,
    left: 275,
    height: 24,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  image2Icon: {
    left: 117,
    width: 45,
    top: 190,
    height: 46,
  },
  image3Icon: {
    left: 195,
    width: 50,
    top: 190,
    height: 46,
  },
  image4Icon: {
    top: 193,
    left: 277,
    width: 43,
  },
  promotions: {
    top: 288,
    left: 31,
    height: 29,
  },
  rectangleLineargradient: {
    top: 314,
    left: 21,
    width: 347,
    height: 152,
    position: "absolute",
  },
  todaysOffer: {
    top: 333,
    left: 85,
    width: 116,
    fontSize: FontSize.size_base,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  aBoxOf: {
    top: 367,
    left: 64,
    fontSize: 22,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 152,
  },
  onAllOrders: {
    top: 416,
    left: 51,
    width: 226,
    fontSize: FontSize.size_base,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  popular: {
    top: 483,
    left: 34,
    height: 29,
  },
  pressable: {
    height: "100%",
    width: "100%",
    borderRadius: Border.br_xl,
  },
  wrapper: {
    left: 15,
    height: 214,
    width: 161,
    top: 512,
  },
  image5Icon: {
    top: 300,
    left: 220,
    width: 133,
    height: 104,
    position: "absolute",
  },
  iphone13142Child3: {
    left: 202,
    borderRadius: Border.br_xl,
    backgroundColor: "transparent",
  },
  image6Icon: {
    top: 539,
    width: 126,
    left: 28,
  },
  beefBurger: {
    left: 14,
    top: 658,
    fontSize: FontSize.size_lg,
    width: 154,
    textAlign: "center",
    color: Color.colorBlack,
    height: 29,
  },
  text: {
    left: 28,
  },
  vectorIcon1: {
    top: "82.58%",
    right: "59.74%",
    bottom: "14.1%",
    left: "33.08%",
    width: "7.18%",
    height: "3.32%",
  },
  image7Icon: {
    top: 533,
    left: 236,
    width: 101,
  },
  cheesPizza: {
    left: 211,
    height: 22,
    top: 658,
    fontSize: FontSize.size_lg,
    width: 154,
    textAlign: "center",
    color: Color.colorBlack,
  },
  text1: {
    left: 226,
  },
  vectorIcon2: {
    top: "81.99%",
    right: "10.77%",
    bottom: "14.69%",
    left: "82.05%",
    width: "7.18%",
    height: "3.32%",
  },
  iphone13142Child4: {
    top: 763,
    left: 2,
    backgroundColor: Color.colorLightgray,
    width: 390,
    height: 79,
    position: "absolute",
  },
  homeIcon: {
    top: 790,
    left: 55,
    width: 41,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon3: {
    right: "56.92%",
    bottom: "1.9%",
    left: "35.9%",
    width: "7.18%",
    height: "3.32%",
  },
  vectorIcon4: {
    height: "3.67%",
    width: "8.72%",
    right: "36.92%",
    bottom: "1.54%",
    left: "54.36%",
  },
  ellipseIcon: {
    height: "1.9%",
    width: "3.33%",
    top: "93.25%",
    right: "35.38%",
    bottom: "4.86%",
    left: "61.28%",
  },
  vectorIcon5: {
    height: "3.91%",
    width: "8.21%",
    top: "94.31%",
    right: "14.36%",
    bottom: "1.78%",
    left: "77.44%",
  },
  text2: {
    top: 783,
    left: 241,
    color: "#f5ecec",
    width: 9,
    height: 20,
    textAlign: "left",
  },
  iphone13142: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13141;
