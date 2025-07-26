export const getOffset = () => {
  if (window.innerWidth > 1024) {
    return 40;
  }
  if (window.innerWidth > 430) {
    return 20;
  }
  if (window.innerWidth <= 430) {
    return 10;
  }
};
