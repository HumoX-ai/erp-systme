/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import appConfig from "../configs/app.config";
import Cookies from "js-cookie";

export const deleteRequest = async ({
  path,
  setRefresh,
}: {
  path: string;
  setRefresh: (refresh: boolean) => void;
}) => {
  setRefresh(true);

  try {
    await axios.delete(`${appConfig.apiPrefix}/${path}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    setRefresh(false);
  }
};
