import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import TrendingMovies from "../components/TrendingMovies";

import TopRatedMovies from "../components/TopRatedMovies";

import UpComingMovies from "../components/UpcomingMovies";

class HomeScreen extends Component {
  state = { trending: [], upcoming: [], topRated: [] };

  componentDidMount() {
    this.getTrendingMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
  }

  getTrendingMovies = async () => {
    const api =
      "https://api.themoviedb.org/3/trending/movie/day?api_key=0ac6c178fc4b692781a21b6504fbbf8a";

    const response = await fetch(api);
    const data = await response.json();
    const updatedData = data.results.map((eachMovie) => ({
      id: eachMovie.id,
      posterPath: eachMovie.poster_path,
    }));

    this.setState({ trending: updatedData });
  };

  getTopRatedMovies = async () => {
    const api =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=0ac6c178fc4b692781a21b6504fbbf8a";

    const response = await fetch(api);
    const data = await response.json();
    const updatedData = data.results.map((eachMovie) => ({
      id: eachMovie.id,
      posterPath: eachMovie.poster_path,
    }));

    this.setState({ topRated: updatedData });
  };

  getUpcomingMovies = async () => {
    const api =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=0ac6c178fc4b692781a21b6504fbbf8a";

    const response = await fetch(api);
    const data = await response.json();
    const updatedData = data.results.map((eachMovie) => ({
      id: eachMovie.id,
      posterPath: eachMovie.poster_path,
    }));

    this.setState({ upcoming: updatedData });
  };

  render() {
    const { trending, upcoming, topRated } = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.title}>Movies</Text>
          {/* Add your home screen content here */}
        </SafeAreaView>
        <ScrollView>
          <TrendingMovies data={trending} />
          <TopRatedMovies data={topRated} />
          <UpComingMovies data={upcoming} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
    paddingTop: 15,
    textAlign: "center",
  },
});

export default HomeScreen;
