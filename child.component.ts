import {Component,OnInit,Input} from "@angular/core";
// component Decorator
@Component({
    selector:'child-app',
    templateUrl:'./child.component.html'
})

export class ChildComponent implements OnInit{

    @Input() title;
    // Public variable
    childTitle:string;

    constructor(){

    }
    ngOnInit(){
        // Assigning values to the variables after ngOnInit
        this.childTitle=this.title;
    }
}