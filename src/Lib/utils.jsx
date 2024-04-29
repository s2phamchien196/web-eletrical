
export const scrollUpHeader = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

let uiKey = 0;

export const nextKey = () => {
  uiKey++;
  return uiKey;
}