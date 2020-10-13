import { returnCelebArray } from "./CelebDataProvider.js"
import { celebHTML } from "./CelebHTML.js"

export const celebList = () => {

   // get a reference to target HTML
   const targetElement = document.querySelector(".list__citizens") 

   const celebArray = returnCelebArray()

   // generate HTML for each celeb
   let celebHTMLRep = ""
   for (const celebs of celebArray)
        celebHTMLRep += celebHTML(celebs)


        //insert this HTML into target Element
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