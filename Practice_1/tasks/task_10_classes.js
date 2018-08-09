'use strict'

class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;

        this.ID = Person.lastID++;
    }
}
Person.lastID = 0;

class PersonList extends Array {

    //Finds the index of a person by name
	indexOfByName(name){
        
    }

	//Finds person by name
    findByName(name){
        
    }

	//Add new person to the PersonList the way that the new Person is always at the beginning of the PersonList.
	add(Person){
		
	}
	
	//Deletes a person from the PersonList by ID.
	deleteByID(ID){
		
	}
	
	//Change the order of the given Persons in the list.
	reorder(Person1, Person2){
		
	}

}


const p1 = new Person("Dora", "email");
const p2 = new Person("me", "myEmail");



















