export default function getNumRandom(min, max, numMax) {
    const arrayNumRandom = [];
    const restaRandom = max - min;


    if (restaRandom >= numMax) {

        while (arrayNumRandom.length < numMax) {
            const numRandom = Math.floor(Math.random() * (max - min) + min);

            !arrayNumRandom.includes(numRandom) && arrayNumRandom.push(numRandom)

        }

        arrayNumRandom.sort((a, b) => { return a - b; })
    } else {

        for (let i = min; i < max; i++) {
            arrayNumRandom.push(i);
        }
    }

    return arrayNumRandom;

}