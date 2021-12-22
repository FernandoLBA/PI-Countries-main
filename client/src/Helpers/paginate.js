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

export const cutterPage = (currentPage, countriesPerPage, countries,) => {
  let lastCountry = currentPage * countriesPerPage;
  let firstCountry =  lastCountry - countriesPerPage;
  let pageCutted = countries.slice(firstCountry, lastCountry);
  
  console.log(pageCutted)
  return pageCutted;
};

// sofia niño de rivera (comediante mexicana)