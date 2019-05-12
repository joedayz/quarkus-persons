import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.interface';

const PERSON_API: string = 'http://localhost:8080/persons';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class PersonDashboardService {

    constructor(private http: HttpClient) { }


    getPersons(): Observable<Person[]> {
        return this.http.get<Person[]>(PERSON_API)
            ;
    }


    createPerson(person: Person): Observable<Person> {
        return this.http.post<Person>(PERSON_API, person);
   } 

 
}