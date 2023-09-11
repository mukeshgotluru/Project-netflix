const trendingMoviesEndPoint =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=0ac6c178fc4b692781a21b6504fbbf8a";

const upComingMoviesEndPoint =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=0ac6c178fc4b692781a21b6504fbbf8a";
const topRatedMoviesEndPoint =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=0ac6c178fc4b692781a21b6504fbbf8a";

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const response = await fetch(options);
    console.log(response);
    return response.results;
  } catch (error) {
    console.log("error: ", error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndPoint);
};

export const fetchUpcomingMovies = () => {
  return apiCall(upComingMoviesEndPoint);
};

export const fetchTopratedMovies = () => {
  return apiCall(topRatedMoviesEndPoint);
};
