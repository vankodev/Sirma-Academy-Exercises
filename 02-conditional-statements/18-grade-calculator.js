function gradeCalculator(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

console.log(gradeCalculator(95));
console.log(gradeCalculator(82));
console.log(gradeCalculator(76));
console.log(gradeCalculator(65));
console.log(gradeCalculator(45));
