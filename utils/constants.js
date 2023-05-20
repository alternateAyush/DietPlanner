export const APP_ID = "c558f139";
export const APP_KEY = "1d0744b6782077580691fd347d9508d6"
export const API_ROOT = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&random=true`;

export const API_URLS = {
  query: (mealName) => `${API_ROOT}${mealName}`,
};
