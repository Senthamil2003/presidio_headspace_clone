import axiosInstance from "./axiosInstance";

export const getMeditawait = async () => {
  try {
    const response = await axiosInstance.get("/meditate");
    return response.data;
  } catch (error) {
    console.error("Error fetching meditate data:", error);
    throw error;
  }
};

export const getFocus = async () => {
  try {
    const response = await axiosInstance.get("/focus");
    return response.data;
  } catch (error) {
    console.error("Error fetching focus data:", error);
    throw error;
  }
};
export const getMusic = async () => {
  try {
    const response = await axiosInstance.get("/music");
    return response.data;
  } catch (error) {
    console.error("Error fetching focus data:", error);
    throw error;
  }
};
