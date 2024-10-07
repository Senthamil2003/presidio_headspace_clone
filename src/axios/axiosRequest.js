import { focusRoute, meditateRoute, musicRoute } from "../Constant/ApiRoutes";
import axiosInstance from "./axiosInstance";

export const getMeditawait = async () => {
  try {
    const response = await axiosInstance.get(meditateRoute);
    return response.data;
  } catch (error) {
    console.error("Error fetching meditate data:", error);
    throw error;
  }
};

export const getFocus = async () => {
  try {
    const response = await axiosInstance.get(focusRoute);
    return response.data;
  } catch (error) {
    console.error("Error fetching focus data:", error);
    throw error;
  }
};
export const getMusic = async () => {
  try {
    const response = await axiosInstance.get(musicRoute);
    return response.data;
  } catch (error) {
    console.error("Error fetching focus data:", error);
    throw error;
  }
};
