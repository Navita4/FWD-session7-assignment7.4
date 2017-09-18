import {Component} from "@angular/core";
import {Employee} from "./employee";
@Component({
    selector:"emp-app",
    templateUrl:"./emp.component.html"
})

export class EmployeeComponent{
    // Property of type employee object

    EmployeeList:Employee[]=[
       { "firstName":"Lucky","lastName":"washi"},
       { "firstName":"Abhi","lastName":"Wadkar"},
       { "firstName":"Rahul","lastName":"Giri"},
       { "firstName":"Siddhi","lastName":"Wani"},
    ]

// Employee array with employee object
employees:Array<Employee>=this.EmployeeList;
}