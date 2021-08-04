import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const ListItem = ({
  name,
  symbol,
  currentPrice,
  priceChangePercentage7d,
  logoUrl,
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* Left side */}
        <View style={styles.leftWrapper}>
          <Image source={{ uri: logoUrl }} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol}</Text>
          </View>
        </View>

        {/* Right side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>{currentPrice}</Text>
          <Text style={(styles.subtitle, { color: "red" })}>
            {priceChangePercentage7d}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 48,
    width: 48,
  },
  titlesWrapper: {
    marginLeft: 8,
  },
  rightWrapper: {
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#A9ABB1",
  },
});

export default ListItem;
