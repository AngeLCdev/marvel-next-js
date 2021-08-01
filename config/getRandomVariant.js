import getNumRandom from "./getNumRandom";

export default function getRandomVariant(array, numItems) {
    const lenghtOfArray = array.length
    const numerosRandom = getNumRandom(0, lenghtOfArray, numItems);

    const suffle = numerosRandom.map(nRandom => {
        return array[nRandom];
    })

    return suffle;

}