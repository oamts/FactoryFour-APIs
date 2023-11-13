// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

export async function client(apiName: string) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const config = {
    method: "GET",
    headers: headers,
  };

  let data;
  try {
    const response = await window.fetch(
      ` https://api.factoryfour.com/${apiName}/health/status `,
      config,
    );
    data = await response.json();
    if (response.ok) {
      // Return a result object similar to Axios
      return {
        status: response.status,
        data,
        headers: JSON.stringify(response.headers),
        url: response.url,
      };
    }
    throw new Error(response.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}

client.get = function (apiName: string) {
  return client(apiName);
};
