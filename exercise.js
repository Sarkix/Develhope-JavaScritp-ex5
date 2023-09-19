const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// Al modificar person2 también se modifica person1 por la asignación por referencia en JavaScript. Es decir, cuando hacemos const person2 = person1 no estamos creando un nuevo objeto person2, sino que person2 simplemente se convierte en otra referencia al mismo objeto que person1. Por eso tanto person1 como person2 apuntan al mismo lugar en la memoria. Por lo tanto, cualquier modificación realizada en cualquiera de ellos afectará al mismo objeto subyacente. Al imprimirlos en la consola ambos objetos tendrán la propiedad firstName con el valor "Simon" por esta razón; hacen referencia al mismo objeto modificado.
