function rageExpenses(
    lostGames,
    headsetPrice,
    mousePrice,
    keyboardPrice,
    displayPrice
) {
    let trashedHeadsets = 0;
    let trashedMice = 0;
    let trashedKeyboards = 0;
    let trashedDisplays = 0;

    for (let i = 1; i <= lostGames; i++) {
        // Every second lost game, Peter trashes his headset.
        if (i % 2 == 0) {
            trashedHeadsets++;
        }

        // Every third lost game, Peter trashes his mouse.
        if (i % 3 == 0) {
            trashedMice++;
        }

        // When Peter trashes both his mouse and headset in the same lost game, he also trashes his keyboard.
        if (i % 2 == 0 && i % 3 == 0) {
            trashedKeyboards++;
        }

        // Every second time he trashes his keyboard, he also trashes his display.
        trashedDisplays = Math.floor(trashedKeyboards / 2);
    }

    const expenses =
        trashedHeadsets * headsetPrice +
        trashedMice * mousePrice +
        trashedKeyboards * keyboardPrice +
        trashedDisplays * displayPrice;

    console.log(`Rage expenses: ${expenses.toFixed(2)} lv.`);
}

rageExpenses(7, 2, 3, 4, 5);
rageExpenses(23, 12.5, 21.5, 40, 200);
