export class Personne {
    id ;
    name ;
    firstname;
    job ;
    age ;
    path ;
    cin ;

  constructor(id = 0, name = '',
              firstname= '', job= '',
              age = 0, path= '', cin= 0) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.job = job;
    this.age = age;
    this.path = path;
    this.cin = cin;
  }
}
