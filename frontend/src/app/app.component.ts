import { Component, OnInit } from '@angular/core';
import { Person } from './person.interface';
import { PersonViewerComponent } from './person-viewer.component';
import { PersonDashboardService } from './person-dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  person: Person;
  persons: Person[];

  constructor(private personService: PersonDashboardService) {

  }


  ngOnInit(): void {
    this.listPersons();
  }


  private listPersons() {
    this.personService.getPersons().subscribe((data: Person[]) => this.persons = data, error => console.log("error en get persons", error));
  }

  onAddPerson(event: Person) {
    this.personService.createPerson(event).subscribe(
      data => {
        this.person = Object.assign({}, this.person, event);
        this.listPersons();
      }
    );
  }

}
