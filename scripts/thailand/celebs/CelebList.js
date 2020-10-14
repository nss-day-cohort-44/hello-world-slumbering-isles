// import our dependency functions
import { returnThaiCelebs } from './CelebDataProvider.js'
import { celebHTML } from './CelebHTML.js'

export const celebList = () => {

    // get a reference to the target HTML element
    const targetElement = document.querySelector(".list__citizens")
    // populate a var with our array of cities
    const celebArray = returnThaiCelebs();

    // generate HTML for each celeb
    let celebHTMLRep = ""
    for (const celeb of celebArray) {
        celebHTMLRep += celebHTML(celeb)
    }

    // insert this HTML into targetElement
    targetElement.innerHTML += `
    <section class="celebList">
    <div class="listContainer">
      <ul>
        ${celebHTMLRep}
      </ul>
    </div>
  </section>
    `
}
