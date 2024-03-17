/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const deleteRequest = async ({
  url,
  setRefresh,
}: {
  url: string;
  setRefresh: (refresh: boolean) => void;
}) => {
  setRefresh(true);

  try {
    await axios.delete(url);
  } catch (error) {
    console.log(error);
  } finally {
    setRefresh(false);
  }
};
