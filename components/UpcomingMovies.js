import { View, Text, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
const UpComingMovies = ({ data }) => {
  const image = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const navigation = useNavigation();
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
        Upcoming Movies
      </Text>
      <FlatList
        horizontal
        onPress={() => console.log("Clicke")}
        data={data}
        renderItem={({ item }) => {
          const image = "https://www.themoviedb.org/t/p/w220_and_h330_face";
          const path = `${image}${item.posterPath}`;

          return (
            <View key={item.id} onPress={() => console.log("Clicke")}>
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

export default UpComingMovies;
