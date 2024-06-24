class Employee {
    constructor(name, salary, position) {
        this.name = name;
        this.salary = salary;
        this.position = position;
    }
}

class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error('Invalid input');
        }

        const employee = new Employee(name, salary, position);

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push(employee);

        console.log(
            `New employee is hired. Name: ${name}. Position: ${position}`
        );
    }

    bestDepartment() {
        let bestDepartment = '';
        let bestAverageSalary = 0;

        for (const department in this.departments) {
            let employees = this.departments[department];

            const averageSalary =
                employees.reduce((acc, emp) => acc + emp.salary, 0) /
                employees.length;

            if (averageSalary > bestAverageSalary) {
                bestAverageSalary = averageSalary;
                bestDepartment = department;
            }
        }

        const result = [
            `Best Department is: ${bestDepartment}`,
            `Average salary: ${bestAverageSalary.toFixed(2)}`,
        ];

        const sortedEmployees = this.departments[bestDepartment]
            .slice()
            .sort(
                (a, b) => b.salary - a.salary || a.name.localeCompare(b.name)
            );

        sortedEmployees.forEach((e) => {
            result.push(`${e.name} ${e.salary} ${e.position}`);
        });

        return result.join('\n');
    }
}

let c = new Company();
c.addEmployee('Stamat', 2000, 'engineer', 'Construction');
c.addEmployee('Peter', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Martin', 500, 'support', 'Construction');
c.addEmployee('Stanley', 2000, 'architect', 'Construction');
c.addEmployee('Stamat', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Peter', 1000, 'graphical designer', 'Marketing');
c.addEmployee('George', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
