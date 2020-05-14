import axios from "axios";

// const baseUrl = "http://localhost:3000";

// const api = axios.create({
//   baseURL: baseUrl
// });

const baseUrl =
  process.env.NODE_ENV == "production"
    ? /* link to your heroku app. Example:*/ "https://dance-studio-api.herokuapp.com/"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl
});

export const loginUser = async loginData => {
  const resp = await api.post("/auth/login", { auth: loginData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const registerUser = async registerData => {
  const resp = await api.post("/users", { user: registerData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return resp.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};

////get all categories
export const getAllCategories = async () => {
  const resp = await api.get("/categories");
  return resp.data;
};
export const getOneCategory = async id => {
  const resp = await api.get(`/categories/${id}`);
  return resp.data;
};

export const getAllDances = async () => {
  const resp = await api.get("/dances");
  return resp.data;
};

export const getOneDance = async id => {
  const resp = await api.get(`/dances/${id}`);
  return resp.data;
};

export const postDance = async danceData => {
  const resp = await api.post("/dances", danceData);
  return resp.data;
};

export const putDance = async (id, danceData) => {
  const resp = await api.put(`/dances/${id}`, danceData);
  return resp.data;
};

export const destroyDance = async id => {
  const resp = await api.delete(`/dances/${id}`);
  return resp;
};
