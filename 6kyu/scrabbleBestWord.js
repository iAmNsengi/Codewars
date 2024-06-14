function getBestWord(points, words) {
    const letterPoints = {};
    for (let i = 0; i < 26; i++) {
        letterPoints[String.fromCharCode(65 + i)] = points[i];
    }
    let maxScore = -1, bestIndex = -1;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let score = 0;

        for (let j = 0; j < word.length; j++) {
            score += letterPoints[word[j]];
        }

        if (
            score > maxScore ||
            (score === maxScore && word.length < words[bestIndex].length)
        ) {
            maxScore = score;
            bestIndex = i;
        }
    }

    return bestIndex;
}
