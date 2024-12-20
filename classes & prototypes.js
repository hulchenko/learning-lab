// Classes approach

// class Parent {
//   constructor(id){
//     this.id = id;
//   };
//   getId(){
//     return this.id;
//   }
// };

// class Child extends Parent {
//   constructor(id, name){
//     super(id);
//     this.name = name;
//   };
//   getName(){
//     return this.name;
//   }
// };

// Equivalent prototype approach

function Parent(id) {
  this.id = id;
}

Parent.prototype.getId = function () {
  return this.id;
};

function Child(id, name) {
  Parent.call(this, id);
  this.name = name;
}

Child.prototype.getName = function () {
  return this.name;
};

Object.setPrototypeOf(Child.prototype, Parent.prototype);

// This part is the same for both

const parent = new Parent(1);
parent.getId();

const child = new Child(2, "child");
child.getId();
child.getName();
