// import our dependency functions
import { returnThaiLandmarks } from './LandmarkDataProvider.js'
import { landmarkHTML } from './LandmarkHTML.js'

export const landmarkList = () => {

    // get a reference to the target HTML element
    const targetElement = document.querySelector(".list__landmarks")
    // populate a var with our array of cities
    const landmarkArray = returnThaiLandmarks();

    // generate HTML for each landmark
    let landmarkHTMLRep = ""
    for (const landmark of landmarkArray) {
        landmarkHTMLRep += landmarkHTML(landmark)
    }

    // insert this HTML into targetElement
    targetElement.innerHTML += `
    <section class="landmarkList">
    <div class="listContainer">
      <ul>
        ${landmarkHTMLRep}
      </ul>
    </div>
  </section>
    `
}
