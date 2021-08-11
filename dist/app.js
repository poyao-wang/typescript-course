"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    describe() {
        // this.id = "NEW ID";
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("d1", "Accounting");
accounting.name = "NEW NAME";
accounting.describe();
