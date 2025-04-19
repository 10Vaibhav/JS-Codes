interface Quiz{
    name: string,
    type: string,
}

interface Course{
    name: string,
    author: string,
    subject: string,
}

// Due to Generic, it is not limited to Quiz or Course, we can reuse it and its a cleaner way to write the code with typeSafety.
class Sellable <T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}
