package com.sample;

import java.util.Objects;

import javax.persistence.Entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
public class Person extends PanacheEntity{

    String name;
    String surname;

    public Person() {}


    public Person(String name, String surname) {
        
        this.name = name;
        this.surname = surname;
    }



    public Person id(Long id) {
        this.id = id;
        return this;
    }



    public String getName(){
        return name;
    }

    public String getSurname(){
        return surname;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setSurname(String surname){
        this.surname = surname;
    }




    public Person name(String name) {
        this.name = name;
        return this;
    }

    public Person surname(String surname) {
        this.surname = surname;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Person)) {
            return false;
        }
        Person person = (Person) o;
        return Objects.equals(name, person.name) && Objects.equals(surname, person.surname);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, surname);
    }

    @Override
    public String toString() {
        return "{" +
            " name='" + getName() + "'" +
            ", surname='" + getSurname() + "'" +
            "}";
    }
    
}