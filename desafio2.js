//class that builds an array of products.
class ProductManager {
    constructor () {
        this.products = []
    }
    
    //this function should be working ok.
    validateId(arrProducts){
        if(arrProducts.length){
          let idLast = arrProducts.reduce((p,c)=> {
            return c.id > p ? c.id : p;
          }, 0);
          return idLast + 1;
        }
        return 1;
      }

    validateCode(arrProducts, code){
      if (arrProducts.length > 0) {
        let repeatedProduct = arrProducts.map(product => product.code == code)
        return (repeatedProduct) ? false : true 
      } else {
        return true
      }
    }
    
    //function to add products with its caracteristics. It receives an object (a product).
    addProduct (product) {
      let { title, description, price, thumbnail, code, stock } = product;
      let insertedCode = this.validateCode(this.products, code)
      if (insertedCode) {
        this.products.push({
            id: this.validateId(this.products),
            title,
            description,
            price,
            thumbnail,
            code: code,
            stock
          })
      } else {
        console.log("ERROR: the code of the product is already taken by another product")
      }
    }

    //function to get a the complete list of products.
    getProducts () {
      return console.log(this.products)
    }

    //function to get a specific product by id (code).
    getProductById(productId) {
      let productFound = this.products.filter(product => product.id == productId)
      // console.log(productFound)
      return (productFound && productFound.length > 0) ?
        console.log(productFound)
        :
        console.log("Not found")
    }
}

// TESTING PROCESS BELOW

let test = new ProductManager()
test.getProducts()
test.addProduct({
  title: 'producto prueba',
  description: 'este es un producto prueba',
  price: 200,
  thumbnail: 'Sin imagen',
  code: 'abc123',
  stock: 25
})
test.getProducts()
test.addProduct({
  title: 'producto prueba',
  description: 'este es un producto prueba',
  price: 200,
  thumbnail: 'Sin imagen',
  code: 'abc123',
  stock: 25
})

test.getProductById(1)
test.getProductById(2)