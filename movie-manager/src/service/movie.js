import axios from "axios";

const baseUrl = 'http://localhost:3001/';

export const getAllMovies = async (data) => await axios.get(`${baseUrl}${data}`);

export const getMovieSearch = async (current, searchValue) =>
  await axios.get(`${baseUrl}${current}?title_like=${searchValue}`);

export const getFavouriteMovies = async () =>
  await axios.get(`${baseUrl}favourite`);

export const addToFavMovie = async (movie) =>
  await axios.post(`${baseUrl}favourite`, movie);
  
export const removeFromFavourite = async (id) =>
  await axios.delete(`${baseUrl}favourite/${id}`);
