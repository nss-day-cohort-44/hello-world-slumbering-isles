import { returnMXCities } from './cities/CityDataProvider.js'
import { cityHTML } from './cities/CityHTML.js'

// debug/testing
const cities = returnMXCities();
console.log(cities);

const HTML = cityHTML(cities[0]);
console.log(HTML);

