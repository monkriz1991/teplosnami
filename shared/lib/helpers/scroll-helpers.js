export const setScrollHidden = (value) => {
  value ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
};
