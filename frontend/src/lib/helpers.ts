export const getDaySessionTerm = () => {
  const hour = new Date().getHours();
  let daySessionTerm = "";

  if (hour < 12) {
    daySessionTerm = "Morning";
  } else if (hour < 16) {
    daySessionTerm = "Afternoon";
  } else {
    daySessionTerm = "Evening";
  }

  return daySessionTerm;
};
