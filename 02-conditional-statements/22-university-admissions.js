function isAdmitted(score, extracurricular) {
    if (score >= 90) {
        console.log('Admitted');
    } else if (score < 80) {
        console.log('Not admitted');
    } else if (extracurricular >= 2) {
        console.log('Admitted');
    } else {
        console.log('Not admitted');
    }
}

isAdmitted(85, 3);
isAdmitted(88, 1);
isAdmitted(91, 0);
isAdmitted(75, 12);
