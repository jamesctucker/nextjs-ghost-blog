export const transformPostDate = (postDate) => {
  const date = new Date(postDate);
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${day} ${months[month - 1]} ${year}`;
};
