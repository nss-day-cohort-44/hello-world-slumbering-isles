// arrary of celeb objects
const celebArray = [
    {
        name: "Ariya Banomyong"
    },
    {
        name: "Aliza 'Alice' Napartivaumnuay"
    },
    {
        name: "Thaksin Shinawatra"
    }
]

// export function to return a copy of the cityArray
export const returnThaiCelebs = () => {
    return celebArray.slice();
}