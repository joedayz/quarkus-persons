import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from './person.interface';

@Component({
    selector: 'person-viewer',
    styleUrls: ['person-viewer.component.css'],
    template: `
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>

        <div class="row">
            <div class="col-8"><input type="text" placeholder="Name" name="name" [ngModel]="detail?.name" size="60"/></div>
        </div>
        <div class="row">
            <div class="col-8"><input type="text" placeholder="Surname" name="surname" [ngModel]="detail?.surname" size="60"/></div>
        </div>
        <button type="submit" [disabled]="form.invalid" >
            Save
        </button>
    </form>
    `
})

export class PersonViewerComponent{

    @Input()
    detail: Person;


    @Output()
    add: EventEmitter<Person> = new EventEmitter<Person>();

    handleSubmit(person: Person, isValid: boolean ){
        if(isValid){
           console.log(person);
           this.add.emit(person);
        }

    }


}