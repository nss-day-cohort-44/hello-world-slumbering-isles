// arrary of city objects
const cityArray = [
    {
        name: "London, England"
    },
    {
        name: "Edinburgh, Scotland"
    },
    {
        name: "Belfast, Northern Ireland"
    }
]

// export function to return a copy of the cityArray
export const returnUKCities = () => {
    return cityArray.slice();
}