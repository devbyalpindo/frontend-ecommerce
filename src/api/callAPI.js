import Cookies from "js-cookie";

export default async function callAPI({
  url,
  method,
  data,
  token,
  serverToken,
  isImage = false,
}) {
  let headers = {};
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
      "Content-Type": "application/json",
    };
  } else if (token) {
    const tokenCookies = Cookies.get("x-token");
    if (tokenCookies) {
      if (isImage) {
        headers = {
          Authorization: `Bearer ${tokenCookies}`,
        };
      } else {
        headers = {
          Authorization: `Bearer ${tokenCookies}`,
          "Content-Type": "application/json",
        };
      }
    }
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }

  const response = await fetch(url, {
    method: method,
    body: data,
    headers: headers,
  }).catch((err) => err.response);

  const json = await response.json();

  return json;
}
