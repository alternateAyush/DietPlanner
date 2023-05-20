import { API_URLS } from '../utils';

const customFetch = async (url, { body, ...customConfig }) => {
  console.log(url);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  };

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    if (response.status === 200) {
      return {
        data: data,
        success: true,
      };
    }
    throw new Error("Failed to load");
  } catch (error) {
    console.error("error");
    return {
      message: error.message,
      success: false,
    };
  }
};

export const getMeals = (mealName) => {
  return customFetch(API_URLS.query(mealName), {
    method: "GET",
  });
};
