import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
const image = "https://www.themoviedb.org/t/p/w220_and_h330_face";

var { height, width } = Dimensions.get("window");

const TrendingMovies = ({ data }) => {
  return (
    <View style={styles.container}>
      {/* Add your home screen content here */}
      <Carousel
        data={data}
        firstItem={1}
        renderItem={({ item }) => <MovieCardItem item={item} />}
        sliderWidth={width}
        itemWidth={width * 0.62}
        inactiveSlideOpacity={0.6}
        slideStyle={{ display: "flex", alignItems: "center" }}
        windowSize={1}
      />
    </View>
  );
};

const MovieCardItem = ({ item }) => {
  const poster = item.posterPath;
  const path = `${image}${poster}`;
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Details")}>
      <View key={item.id}>
        <Image
          source={{ uri: `${path}` }}
          style={{
            width: width * 0.6,
            height: height * 0.4,
            borderRadius: 10,
            resizeMode: "cover",
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    paddingTop: 15,
    paddingLeft: 15,
  },
});

export default TrendingMovies;
