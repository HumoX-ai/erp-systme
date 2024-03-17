/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const getRequest = async ({
  url,
  setData,
  params,
}: {
  url: string;
  setData: (data: any) => void;
  params?: { [k: string]: string };
}) => {
  try {
    const response = await axios.get(url, { params: params });

    if (response?.data) {
      setData(response?.data);
    } else {
      setData([]);
    }
  } catch (error) {
    console.log(error);
  }
};
