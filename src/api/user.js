import callAPI from "./callAPI";

export async function getproduct() {
  const url = `${process.env.REACT_APP_URL_API}/product`;
  return callAPI({
    url,
    method: "GET",
  });
}

export async function login(data) {
  const url = `${process.env.REACT_APP_URL_API}/users/login`;
  return callAPI({
    url,
    data,
    method: "POST",
  });
}
