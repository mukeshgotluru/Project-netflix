import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";

const TopRatedMovies = ({ data }) => {
  const image = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  return (
    <View>
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
          marginLeft: 10,
          marginBottom: 10,
        }}
      >
        TopRated Movies
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => {
          const image = "https://www.themoviedb.org/t/p/w220_and_h330_face";
          const path = `${image}${item.posterPath}`;
          return (
            <View key={item.id}>
              <Image
                source={{ uri: `${path}` }}
                resizeMode="contain"
                style={{ height: 200, width: 130, borderRadius: 8, margin: 10 }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default TopRatedMovies;
