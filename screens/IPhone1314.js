import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const IPhone1314 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.iphone13141}
      locations={[1, 1]}
      colors={["#6445ab", "rgba(255, 255, 255, 0)"]}
      useAngle={true}
      angle={180}
    >
      <Image
        style={styles.iphone13141Child}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.image1Icon, styles.image1IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.enjoyYourFood, styles.getStartedFlexBox]}>
        Enjoy Your Food
      </Text>
      <Pressable
        style={[styles.iphone13141Item, styles.image1IconPosition]}
        onPress={() => navigation.navigate("IPhone13141")}
      />
      <Text style={[styles.getStarted, styles.getStartedFlexBox]}>
        Get Started
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  image1IconPosition: {
    left: 87,
    position: "absolute",
  },
  getStartedFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  iphone13141Child: {
    top: 70,
    left: 22,
    width: 345,
    height: 345,
    position: "absolute",
  },
  image1Icon: {
    top: 124,
    width: 216,
    height: 236,
  },
  enjoyYourFood: {
    top: 500,
    left: 35,
    fontSize: 44,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    width: 324,
    height: 77,
  },
  iphone13141Item: {
    top: 656,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhite,
    width: 220,
    height: 60,
  },
  getStarted: {
    top: 672,
    left: 107,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: "#220f4d",
    width: 175,
    height: 27,
  },
  iphone13141: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default IPhone1314;
