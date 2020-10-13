// arrary of landmark objects
const landmarkArray = [
    {
        name: "Doi Inthanon National Park"
    },
    {
        name: "Nakkerd Hill"
    },
    {
        name: "Phraya Nakhon"
    }
]

// export function to return a copy of the cityArray
export const returnThaiLandmarks = () => {
    return cityArray.slice();
}