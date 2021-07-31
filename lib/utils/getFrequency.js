
export const getFrequency = (arr, target) => {
    const counts = {};

    for (const string of arr) {
        counts[string] = counts[string] ? counts[string] + 1 : 1;
    }
    return counts[target];
};
