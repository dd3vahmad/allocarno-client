import a from "axios";

a.defaults.baseURL = "http://localhost:5050/api";
a.defaults.withCredentials = true;

a.interceptors.response.use((res) => {
  if (res.status === 401) {
    window.location.pathname = "/onboarding/s/login";
  }
  return res;
});

const axios = a;

export default axios;
