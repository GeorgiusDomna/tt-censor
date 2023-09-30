function censor() {
    const pairsWords = [];

    return function (param1, param2) {

        if (param1 && param2) {
            pairsWords.push([param1, param2]);

        } else if (param1) {
            return pairsWords.reduce((result, [oldWord, newWord]) => {
                const regex = new RegExp(`\\b${oldWord}\\b`, 'g');
                return result.replace(regex, newWord);
            }, param1);
        }
    }
}