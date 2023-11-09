// Agrega un método setter a la clase `Product` que permita modificar la cantidad 
// del producto. Luego, utiliza el setter para cambiar la cantidad de una instancia
// y muestra el precio total actualizado.

class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this._quantity = quantity
    }
    get quantity() {
        return this._quantity
    }

    set quantity(newQuantity) {
        this._quantity = newQuantity
    }

}
const product = new Product('Hat', 19.99, 2)
console.log('Total Price:', product.totalPrice) // 19.99 x 2

product.quantity = 5
console.log('Updated Total Price:', product.totalPrice) // 19.99 x 5



