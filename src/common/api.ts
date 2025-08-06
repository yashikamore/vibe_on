export const fetchSongs = async () => {
  const BASE_URL = 'https://itunes.apple.com/';
  const END_POINT = 'search?term=Justin+beiber';
  try {
    const response = await fetch(BASE_URL + END_POINT);
    const json = await response.json();
    return json.results || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
