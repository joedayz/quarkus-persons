package com.sample;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;
import javax.ws.rs.Consumes;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * RESTEndpoint
 */
@Path("/persons")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class RESTEndpoint {


    @GET        
    public List<Person> list() {
        return Person.listAll();
    }   
    
    @Transactional
    @POST
    public Person add (Person person){
        person.persist();
        return person;
    }




}