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
  try {
    const response = await axios.get(`${appConfig.apiPrefix}/${path}`, {
      params: params,
    });

    setData && setData(response?.data);

    return response?.data;
  } catch (error) {
    console.log(error);
    setData && setData([]);
  }
};
