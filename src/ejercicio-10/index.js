// Herencia con "this" en Clases:

// Extiende la clase `Person` para crear una clase `Student`.
// Agrega una propiedad adicional `grade` y sobrescribe el método 
// `introduce` para incluir también el grado del estudiante. Crea
// una instancia de `Student` y llama al método `introduce`.

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    introduce() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años.`)
    }    
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }
    introduce(){
        console.log(`Hola, soy ${this.name} tengo ${this.age} años y estoy en  ${this.grade}.`)
    }
}
const student = new Student('Fabián', 14, 3 )
student.introduce()

