// utils.js
export const getImageUrl = (path) => {
  const imageUrl = `/assets/${path}`; // Directly reference assets in the public folder
  console.log(`Generated Image URL: ${imageUrl}`);
  return imageUrl;
};
