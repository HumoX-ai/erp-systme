import { useSearchParams } from "react-router-dom";

const useSearchparams = () => {
  const [a, b] = useSearchParams();
  const searchParams = Object.fromEntries([...a]);
  const deleteParams = (_key: string) => {
    a.delete(_key);
    b(a);
  };
  const deleteGroup = (_key: string[]) => {
    for (let i = 0; i < _key.length; i++) {
      const keyPar = `${_key[i]}`;
      a.delete(keyPar);
      b(a);
    }
  };
  const setSearchParams = (_key: string, value: number | string) => {
    a.set(String(_key), String(value));
    b(a);
  };

  const setGroup = (groups: { [k: string]: string }) => {
    for (const key in groups) {
      a.set(String(key), String(groups[key]));
      b(a);
    }
  };

  return { searchParams, setSearchParams, deleteParams, setGroup, deleteGroup };
};

export default useSearchparams;
