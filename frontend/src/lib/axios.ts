import a from "axios";

a.defaults.baseURL = "http://localhost:5050/api";

a.interceptors.response.use((res) => {
  console.log(res);
  return res;
});

const axios = a;

export default axios;
