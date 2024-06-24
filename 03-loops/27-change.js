function change(amount) {
    const coins = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let remaining = Math.round(amount * 100);
    let coinCounter = 0;

    for (let i = 0; i < coins.length; i++) {
        const stotinki = Math.round(coins[i] * 100);

        while (remaining >= stotinki) {
            coinCounter++;
            
            remaining -= stotinki;
        }
    }

    console.log(coinCounter);
}

change(1.23);
change(2);
change(0.56);
change(2.73);
