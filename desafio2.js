//class that builds an array of products.
class ProductManager {
    constructor () {
        this.products = []
    }
    
    //this function should be working ok.
    validateCode(arr){
        if(arr.length){
          let codeLast = arr.reduce((p,c)=> {
            return c.code > p ? c.code : p;
          }, 0);
          return codeLast + 1;
        }
        return 1;
      }
    
    //function to add products with its caracteristics. It receives an object.
    addProduct (product) {
        let { title, description, price, thumbnail, stock } = product;
        this.products.push({
        title,
        description,
        price,
        thumbnail,
        code: this.validateCode(this.products),
        stock
        })
    }

    //function to get a the complete list of products.
    getProducts () {
      return console.log(this.products)
    }

    //function to get a specific product by id (code).
    getProductById(productCode) {
      let productFound = this.products.map(product => product.code === productCode)
      return (productFound) ? productFound : console.log("Not found")
    }
}

let test = new ProductManager('manzana')
console.log(test.products)