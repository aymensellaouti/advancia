export class Personne {
    id ;
    name ;
    firstname;
    job ;
    age ;
    path ;

  constructor(id = 0, name = '',
              firstname= '', job= '',
              age = 0, path= '') {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.job = job;
    this.age = age;
    this.path = path;
  }
}
