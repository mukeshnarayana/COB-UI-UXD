import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13143 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.iphone13144}
      locations={[1, 1]}
      colors={["#fff", "rgba(255, 255, 255, 0)"]}
      useAngle={true}
      angle={180}
    >
      <Text style={[styles.itemsInCart, styles.itemsInCartLayout]}>
        2 items in cart
      </Text>
      <View style={[styles.iphone13144Child, styles.rectangleViewLayout]} />
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-12.png")}
      />
      <Text style={[styles.burger, styles.burgerTypo]}>Burger</Text>
      <Text style={[styles.noodells, styles.burgerTypo]}>Noodells</Text>
      <View style={styles.iphone13144Item} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={styles.iphone13144Inner}
        resizeMode="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <Text style={styles.text}>2</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={[styles.image2Icon, styles.image2IconLayout]}
        resizeMode="cover"
        source={require("../assets/image-21.png")}
      />
      <Text style={[styles.text1, styles.textTypo1]}>$20</Text>
      <Text style={styles.text2}>$15</Text>
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <View
        style={[styles.iphone13144Child1, styles.iphone13144ChildLayout1]}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
      <Text style={[styles.text3, styles.textTypo]}>1</Text>
      <View style={[styles.iphone13144Child2, styles.iphone13144ChildLayout]} />
      <View style={[styles.iphone13144Child3, styles.iphone13144ChildLayout]} />
      <Image
        style={[styles.vectorIcon7, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <View
        style={[styles.iphone13144Child4, styles.iphone13144ChildLayout1]}
      />
      <Text style={[styles.text4, styles.textTypo]}>1</Text>
      <Image
        style={[styles.groupIcon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
      <Text style={[styles.otherInstructions, styles.totalTypo]}>
        Other Instructions
      </Text>
      <View style={[styles.iphone13144Child5, styles.image2IconLayout]} />
      <View style={[styles.iphone13144Child6, styles.iphone13144ChildLayout]} />
      <Text style={[styles.total, styles.totalTypo]}>Total:</Text>
      <Text style={[styles.text5, styles.textTypo1]}>$35</Text>
      <View style={styles.iphone13144Child7} />
      <Pressable
        style={styles.backToMenuContainer}
        onPress={() => navigation.navigate("IPhone13141")}
      >
        <Text style={styles.backToMenu}>Back To Menu</Text>
      </Pressable>
      <Text style={styles.checkOut}>Check Out</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  itemsInCartLayout: {
    height: 35,
    width: 200,
    textAlign: "left",
  },
  rectangleViewLayout: {
    height: 137,
    width: 122,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  burgerTypo: {
    height: 24,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout1: {
    top: "94.91%",
    bottom: "1.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "7.18%",
    height: "3.32%",
    position: "absolute",
    overflow: "hidden",
  },
  image2IconLayout: {
    height: 98,
    position: "absolute",
  },
  textTypo1: {
    height: 19,
    color: Color.colorGold,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  vectorIconLayout: {
    width: "2.69%",
    height: "1.24%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "51.03%",
    right: "44.62%",
    width: "4.36%",
    height: "1.78%",
  },
  iphone13144ChildLayout1: {
    height: 15,
    borderRadius: Border.br_3xs,
    left: 161,
    width: 38,
    position: "absolute",
  },
  groupIconPosition: {
    left: "37.44%",
    right: "59.23%",
    height: "1.3%",
    width: "3.33%",
  },
  textTypo: {
    fontFamily: FontFamily.interLight,
    fontStyle: "italic",
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  iphone13144ChildLayout: {
    height: 38,
    position: "absolute",
  },
  iconPosition: {
    bottom: "59.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  totalTypo: {
    left: 18,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  itemsInCart: {
    top: 31,
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack,
    height: 35,
    width: 200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 24,
    position: "absolute",
  },
  iphone13144Child: {
    top: 87,
    left: 17,
  },
  image1Icon: {
    top: 112,
    width: 90,
    height: 88,
    left: 34,
    position: "absolute",
  },
  burger: {
    top: 100,
    left: 127,
    width: 106,
  },
  noodells: {
    top: 257,
    left: 124,
    width: 127,
  },
  iphone13144Item: {
    top: 761,
    left: 6,
    backgroundColor: Color.colorLightgray,
    width: 390,
    height: 79,
    position: "absolute",
  },
  vectorIcon: {
    top: "95.14%",
    right: "57.18%",
    bottom: "1.54%",
    left: "35.64%",
    width: "7.18%",
    height: "3.32%",
    maxWidth: "100%",
  },
  iphone13144Inner: {
    height: "1.9%",
    top: "93.96%",
    bottom: "4.15%",
    left: "61.28%",
    right: "35.38%",
    width: "3.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "3.91%",
    width: "8.21%",
    top: "94.31%",
    right: "11.54%",
    left: "80.26%",
    bottom: "1.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon2: {
    right: "79.23%",
    left: "13.59%",
  },
  vectorIcon3: {
    left: "57.44%",
    right: "35.38%",
  },
  text: {
    top: 792,
    left: 243,
    fontSize: 10,
    width: 9,
    height: 8,
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  rectangleView: {
    top: 250,
    left: 16,
  },
  image2Icon: {
    top: 269,
    width: 86,
    left: 34,
  },
  text1: {
    top: 137,
    left: 136,
    width: 59,
    fontSize: FontSize.size_mini,
    height: 19,
    color: Color.colorGold,
  },
  text2: {
    top: 294,
    width: 38,
    left: 142,
    height: 19,
    color: Color.colorGold,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  vectorIcon4: {
    top: "13.27%",
    right: "3.72%",
    bottom: "85.49%",
    left: "93.59%",
  },
  vectorIcon5: {
    top: "31.28%",
    right: "5%",
    bottom: "67.48%",
    left: "92.31%",
  },
  vectorIcon6: {
    top: "19.43%",
    bottom: "78.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone13144Child1: {
    top: 164,
    backgroundColor: "rgba(217, 217, 217, 0.04)",
  },
  groupIcon: {
    top: "19.67%",
    bottom: "79.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text3: {
    top: 167,
    left: 167,
    width: 26,
    height: 10,
  },
  iphone13144Child2: {
    top: 152,
    width: 74,
    backgroundColor: Color.colorGainsboro_200,
    height: 38,
    left: 142,
  },
  iphone13144Child3: {
    top: 313,
    width: 78,
    backgroundColor: Color.colorGainsboro_200,
    height: 38,
    left: 142,
  },
  vectorIcon7: {
    top: "38.86%",
    left: "51.03%",
    right: "44.62%",
    width: "4.36%",
    height: "1.78%",
  },
  iphone13144Child4: {
    top: 328,
    backgroundColor: "rgba(217, 217, 217, 0.88)",
  },
  text4: {
    top: 332,
    left: 176,
  },
  groupIcon1: {
    top: "39.34%",
    left: "37.44%",
    right: "59.23%",
    height: "1.3%",
    width: "3.33%",
  },
  otherInstructions: {
    top: 403,
    height: 35,
    width: 200,
    textAlign: "left",
  },
  iphone13144Child5: {
    top: 445,
    left: 10,
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 339,
  },
  iphone13144Child6: {
    top: 555,
    left: 27,
    backgroundColor: Color.colorWhite,
    width: 80,
  },
  total: {
    top: 569,
    width: 77,
    textAlign: "center",
  },
  text5: {
    top: 571,
    left: 246,
    width: 65,
    fontSize: FontSize.size_xl,
  },
  iphone13144Child7: {
    top: 620,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorBlueviolet,
    width: 307,
    height: 54,
    left: 24,
    position: "absolute",
  },
  backToMenu: {
    color: "#6445ab",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  backToMenuContainer: {
    left: 92,
    top: 701,
    position: "absolute",
  },
  checkOut: {
    top: 635,
    left: 126,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iphone13144: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default IPhone13143;
