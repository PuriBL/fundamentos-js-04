// Uso de "this" en Clases:
// Crea una clase `Person` con propiedades `name` y `age`. Agrega un método
// `introduce` que muestre un mensaje como "Hola, soy [nombre] y tengo [edad] 
// años". Crea una instancia de `Person` y llama al método `introduce`.

class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    introduce() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años.`) // `` estas comillas      
    }
}
const person = new Person('Puri', 28)
person.introduce()

