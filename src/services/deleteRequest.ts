/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import appConfig from "../configs/app.config";

export const deleteRequest = async ({
  path,
  setRefresh,
}: {
  path: string;
  setRefresh: (refresh: boolean) => void;
}) => {
  setRefresh(true);

  try {
    await axios.delete(`${appConfig.apiPrefix}/${path}`);
  } catch (error) {
    console.log(error);
  } finally {
    setRefresh(false);
  }
};
