function payWith(oneLevs, twoLevs, fiveLevs, sum) {
    for (let i = 0; i <= oneLevs; i++) {
        for (let j = 0; j <= twoLevs; j++) {
            for (let k = 0; k <= fiveLevs; k++) {
                if (sum == i * 1 + j * 2 + k * 5) {
                    console.log(
                        `${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`
                    );
                }
            }
        }
    }
}

payWith(3, 2, 3, 10);
// payWith(5, 3, 1, 7);
