export function generateRandomArray(totalCount: number) {
    const generatedArray = [];
    for (let i = 1; i <= totalCount; i++) {
        generatedArray.push(i);
    }
    return generatedArray;
}