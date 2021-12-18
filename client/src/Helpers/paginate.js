export const paginate = (quantity) => {
  let pages = [];

  let counter = 0;
  // 250 / 10 = 25 pages
  while (counter < quantity / 10) {
    pages.push(counter + 1);
    counter++;
  }

  return pages;
};

export const paginator = (currentePage, countries) => {
  const nextPage = countries.slice();
};

// sofia niño de rivera (comediante mexicana)