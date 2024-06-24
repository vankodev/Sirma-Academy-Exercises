function getTicketPrice(age) {
    if (age <= 12) return '$5';
    if (age <= 19) return '$8';
    return '$10';
}

console.log(getTicketPrice(10));
console.log(getTicketPrice(16));
console.log(getTicketPrice(25));
console.log(getTicketPrice(13));
