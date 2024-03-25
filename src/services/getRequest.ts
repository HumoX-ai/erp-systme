/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import appConfig from "../configs/app.config";

export const getRequest = async ({
  path,
  setData,
  params,
}: {
  path: string;
  setData?: (data: any) => void;
  params?: { [k: string]: string };
}) => {
  console.log(appConfig.apiPrefix);

  try {
    const response = await axios.get(`${appConfig.apiPrefix}/${path}`, {
      params: params,
    });

    if (response?.data) {
      setData && setData(response?.data);
    } else {
      setData && setData([]);
    }

    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
