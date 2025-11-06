import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  axios.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  return instance;
};

export default useAxiosSecure;
