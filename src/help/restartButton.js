export const restartButton = (setActive) => {
  const date = new Date();
  const hours = 20;

  if (hours >= 20 && hours < 21) {
    setActive(false);
  } else {
    setActive(true);
  }
};
