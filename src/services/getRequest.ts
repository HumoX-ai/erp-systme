/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import appConfig from "../configs/app.config";
import Cookies from "js-cookie";

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
      headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
    });

    setData && setData(response?.data);

    return response?.data;
  } catch (error) {
    console.log(error);
    setData && setData([]);
  }
};
