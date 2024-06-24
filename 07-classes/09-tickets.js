class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

class TicketDatabase {
    #tickets = [];

    addTicket(destination, price, status) {
        this.#tickets.push(new Ticket(destination, price, status));
    }

    sortTickets(criterion) {
        let result = this.#tickets.sort((a, b) => {
            if (criterion === 'destination') {
                return a.destination.localeCompare(b.destination);
            } else if (criterion === 'price') {
                return a.price - b.price;
            } else if (criterion === 'status') {
                return a.status.localeCompare(b.status);
            }
        });

        return result;
    }
}

function manageTicketDatabase(ticketDescriptions, sortingCriterion) {
    let ticketDatabase = new TicketDatabase();

    for (const ticket of ticketDescriptions) {
        let [destination, priceText, status] = ticket.split('|');
        let price = Number(priceText).toFixed(2);
        ticketDatabase.addTicket(destination, price, status);
    }

    return ticketDatabase.sortTickets(sortingCriterion);
}

console.log(
    manageTicketDatabase(
        [
            'Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed',
        ],
        'destination'
    )
);

console.log(
    manageTicketDatabase(
        [
            'Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed',
        ],
        'status'
    )
);
