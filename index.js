//Practicing Higher Order Functions And Arrays
const users= [
    {
        name: "John", 
        gender: "Male", 
        age: 22,
        start: 1981, 
        end: 2003
    },

    {   name: "Mike", 
        gender: "Male", 
        age: 32,
        start: 1992, 
        end: 2008
    },
    {   name: "Mara", 
        gender: "Female", 
        age: 18,
        start: 1999, 
        end: 2007
    },
    {   name: "Christine", 
        gender: "Female", 
        age: 52,
        start: 1989, 
        end: 2010
    },
    {   name: "Jonathan", 
        gender: "Male", 
        age: 40,
        start: 2009, 
        end: 2014
    },
    {   name: "Trisha", 
        gender: "Female", 
        age: 25,
        start: 1987, 
        end: 2010
    },
    {   name: "Sven", 
        gender: "Male", 
        age: 26,
        start: 1986, 
        end: 1996
    },
    {   name: "Nero", 
        gender: "Male", 
        age: 10,
        start: 2011, 
        end: 2016
    },
    {   name: "Fatima", 
        gender: "female", 
        age: 5,
        start: 1981, 
        end: 1989
    }
  ];


  //FOREACH

/*const usersName = users.forEach(function (users){
    console.table(users.name);
}) */


  //FILTER

  //FIlter all the male users

  /*const usersGender = users.filter(function (user){
    if(user.gender === "Female"){
        return true;
    }
  }); */

 /*const usersAge = users.filter(function (user){
    if(user.age > 18){
        return true;
    }
 }); */

  //MAP
  
  /*const nameAge = users.map(function (user){
    return `My name is ${user.name} and age is ${user.age}`;
  }); */



  //SORT

  const usersAge = users.sort(function (a, b){
    return a.age - b.age;
  });


  //REDUCE

  const totalAge = users.reduce(function (total, user){
    return total + user.age;
  },0);

  console.table(totalAge);
