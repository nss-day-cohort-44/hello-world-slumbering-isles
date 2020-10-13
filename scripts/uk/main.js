import { returnCelebArray } from "./celebrities/CelebDataProvider.js"

const celebsFromDP = returnCelebArray()
console.log(celebsFromDP)
import { returnUKCities } from './cities/CityDataProvider.js'

// debug/testing
const cities = returnUKCities();
console.log(cities);
