// data access

const data = [{id:1, name:'abul', address: 'kochu khet'}];
console.log(data[0].address);

const products = {
    count: 500,
    data: [{id: 1, name: 'lenovo laptop', price:65000}, 
            {id: 2, name:'macbook', price: 165000}            
]
    
}

console.log(products.data[0].price);

const user1 = {
    id:501,
    city:'Dhaka',
    street: {
        first: 'Poribag',
        second:'bhuter goli',
        third:'komlapur'
    }
}

console.log(user1.street.second);

const user2 ={ 
    id:500,
    address: {
        street:{
            street1: 'Tikapara',
            street2:'Shadur more'
        }
    }
}

const user3 ={ 
    id:500,
    address: {
        
            street1: 'Tikapara',
            street2:'Shadur more'
      
    }
}

console.log(user2.address.street.street1);
console.log(user3.address.street?.street1);  //Optional chaining use: ?

