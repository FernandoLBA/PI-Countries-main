// recibe la cantidad de países, se encarga de calcular la cantidad de páginas
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

// recibe la página dónde se encuentra actualmente, la cantidad de países por página
// y un array con los países a paginar
export const cutterPage = (currentPage, countriesPerPage, countries,) => {
  let lastCountry = currentPage * countriesPerPage; // 2 * 10 = 20
  let firstCountry =  lastCountry - countriesPerPage; // 20 - 10 = 10
  let pageCutted = countries.slice(firstCountry, lastCountry); // corta (10, 20)
  
  return pageCutted;
};