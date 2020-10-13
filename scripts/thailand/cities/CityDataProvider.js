// arrary of city objects
const cityArray = [
    {
        name: "Chiang Mai"
    },
    {
        name: "Phuket"
    },
    {
        name: "Bangkok"
    }
]

// export function to return a copy of the cityArray
export const returnThaiCities = () => {
    return cityArray.slice();
}