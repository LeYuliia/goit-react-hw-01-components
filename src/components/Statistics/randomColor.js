const colors = [
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
  "##5ed1c9",
  "#d15ea7",
  "#945ccc",
];

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export { colors, random };
