import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone13142 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.iphone13143}
      locations={[1, 1]}
      colors={["#6445ab", "rgba(255, 255, 255, 0)"]}
      useAngle={true}
      angle={180}
    >
      <Image
        style={styles.iphone13143Child}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.image8Icon}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <View style={styles.iphone13143Item} />
      <View style={[styles.iphone13143Inner, styles.iphone13143InnerBg]} />
      <Text style={styles.text}>4.8</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
      <Text style={styles.text1}>$20</Text>
      <Text style={[styles.beefBurger, styles.addOneTypo]}>Beef Burger</Text>
      <Text
        style={[styles.bigJuicyBeef, styles.addToCartTypo]}
      >{`Big juicy beef burger with cheese, lettuce ,tomato,onions and special 
sauce!`}</Text>
      <View style={[styles.rectangleView, styles.iphone13143ChildLayout]} />
      <View style={[styles.iphone13143Child1, styles.iphone13143ChildLayout]} />
      <View style={[styles.iphone13143Child2, styles.iphone13143ChildLayout]} />
      <Image
        style={styles.image9Icon}
        resizeMode="cover"
        source={require("../assets/image-9.png")}
      />
      <Text style={[styles.addOne, styles.addOneTypo]}>Add One</Text>
      <Image
        style={styles.image11Icon}
        resizeMode="cover"
        source={require("../assets/image-111.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.iphone13143InnerBg]}
        onPress={() => navigation.navigate("IPhone13143")}
      />
      <Text style={[styles.addToCart, styles.addToCartTypo]}>Add To Cart</Text>
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={styles.image10Icon}
        resizeMode="cover"
        source={require("../assets/image-10.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iphone13143InnerBg: {
    backgroundColor: Color.colorBlueviolet,
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  addOneTypo: {
    height: 29,
    width: 154,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    position: "absolute",
  },
  addToCartTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iphone13143ChildLayout: {
    height: 95,
    width: 91,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xl,
    top: 645,
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "10.66%",
    top: "86.02%",
    width: "7.18%",
    height: "3.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone13143Child: {
    top: 35,
    left: 35,
    width: 338,
    height: 334,
    position: "absolute",
  },
  image8Icon: {
    top: 71,
    left: 99,
    width: 209,
    height: 205,
    position: "absolute",
  },
  iphone13143Item: {
    top: 348,
    borderTopLeftRadius: 70,
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 496,
    left: 0,
    position: "absolute",
  },
  iphone13143Inner: {
    top: 387,
    left: 40,
    borderRadius: 40,
    width: 77,
    height: 31,
  },
  text: {
    top: 394,
    left: 56,
    fontSize: FontSize.size_mini,
    width: 54,
    height: 18,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.13%",
    width: "3.59%",
    top: "46.68%",
    right: "82.31%",
    bottom: "51.18%",
    left: "14.1%",
  },
  text1: {
    top: 389,
    left: 317,
    color: Color.colorGold,
    width: 65,
    height: 19,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  beefBurger: {
    top: 479,
    left: 10,
  },
  bigJuicyBeef: {
    top: 521,
    left: 31,
    color: Color.colorGray,
    width: 335,
    height: 81,
  },
  rectangleView: {
    left: 23,
  },
  iphone13143Child1: {
    left: 149,
  },
  iphone13143Child2: {
    left: 270,
  },
  image9Icon: {
    top: 670,
    left: 43,
    width: 59,
    height: 64,
    position: "absolute",
  },
  addOne: {
    top: 616,
    left: 0,
  },
  image11Icon: {
    top: 662,
    left: 282,
    width: 68,
    height: 61,
    position: "absolute",
  },
  vectorIcon1: {
    right: "68.21%",
    left: "24.62%",
  },
  vectorIcon2: {
    right: "36.67%",
    left: "56.15%",
  },
  vectorIcon3: {
    right: "3.85%",
    left: "88.97%",
  },
  rectanglePressable: {
    top: 795,
    left: 69,
    borderRadius: Border.br_11xl,
    width: 224,
    height: 40,
  },
  addToCart: {
    top: 803,
    left: 125,
    color: Color.colorWhite,
    textAlign: "left",
  },
  vectorIcon4: {
    height: "2.49%",
    width: "4.62%",
    top: "2.96%",
    right: "86.41%",
    bottom: "94.55%",
    left: "8.97%",
  },
  image10Icon: {
    top: 651,
    left: 169,
    width: 50,
    height: 83,
    position: "absolute",
  },
  iphone13143: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default IPhone13142;
