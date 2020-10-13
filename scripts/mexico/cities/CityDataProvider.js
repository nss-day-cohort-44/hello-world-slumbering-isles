// arrary of city objects
const cityArray = [
    {
        name: "Leon"
    },
    {
        name: "Puebla"
    },
    {
        name: "Tijuana"
    }
]

// export function to return a copy of the cityArray
export const returnMXCities = () => {
    return cityArray.slice();
}