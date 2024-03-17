/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const postRequest = async ({
  url,
  setRefresh,
  values,
  params,
  setButtonLoading,
}: {
  url: string;
  values: any;
  params?: { [k: string]: string };
  setRefresh: (refresh: boolean) => void;
  setButtonLoading?: (refresh: boolean) => void;
}) => {
  setRefresh(true);
  setButtonLoading ? setButtonLoading(true) : null;

  try {
    await axios.post(url, values, { params: params });
  } catch (error) {
    console.log(error);
  } finally {
    setButtonLoading ? setButtonLoading(false) : null;
    setRefresh(false);
  }
};
