function fibonacciSum(n) {
    let prevNum = 0;
    let currNum = 1;
    let sum = 1;

    if (n == 0) {
        sum = 0;
    } else if (n == 1) {
        sum = 1;
    } else {
        for (let i = 2; i <= n; i++) {
            const nextNum = prevNum + currNum;
            prevNum = currNum;
            currNum = nextNum;
            sum += nextNum;
        }   
    }

    console.log(sum);
}

fibonacciSum(3); //4
fibonacciSum(5); //12
fibonacciSum(1); //1
fibonacciSum(0); //0
fibonacciSum(10); //143

