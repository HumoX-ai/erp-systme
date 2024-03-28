/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import appConfig from "../configs/app.config";

export const putRequest = async ({
  path,
  setRefresh,
  values,
  params,
  setButtonLoading,
}: {
  path: string;
  values: any;
  params?: { [k: string]: string };
  setRefresh: (refresh: boolean) => void;
  setButtonLoading?: (refresh: boolean) => void;
}) => {
  setRefresh(true);
  setButtonLoading ? setButtonLoading(true) : null;

  try {
    await axios.put(`${appConfig.apiPrefix}/${path}`, values, {
      params: params,
    });
  } catch (error) {
    console.log(error);
  } finally {
    setButtonLoading ? setButtonLoading(false) : null;
    setRefresh(false);
  }
};
