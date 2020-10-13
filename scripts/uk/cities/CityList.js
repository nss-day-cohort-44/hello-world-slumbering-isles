// import our dependency functions
import { returnUKCities } from './CityDataProvider.js'
import { cityHTML } from './CityHTML.js'

export const cityList = () => {

    // get a reference to the target HTML element
    const targetElement = document.querySelector(".list__cities")
    // populate a var with our array of cities
    const cityArray = returnUKCities();

    // generate HTML for each city
    let cityHTMLRep = ""
    for (const city of cityArray) {
        cityHTMLRep += cityHTML(city)
    }

    // insert this HTML into targetElement
    targetElement.innerHTML += `
    <section class="cityList">
    <div class="listContainer">
      <ul>
        ${cityHTMLRep}
      </ul>
    </div>
  </section>
    `
}
