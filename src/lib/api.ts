import axios from "axios";

export const fetchUserInfo = async (accessToken: string) => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting user info:", error);
    throw error;
  }
};
