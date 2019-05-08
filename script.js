
var vue = new Vue({
    el: '#cart-app',
    data: {
        products:[
            {name : 'Hamam' , price : 30},
            {name : 'Rexona' , price : 40},
            {name : 'Nvidia GTX 1060' , price : 40000},
            {name : 'Dell inspiron 7577' , price : 150000},
            {name : 'School Bag' , price : 1200},
            {name : 'Laptop Bag' , price : 1200},
            {name : 'Hp Pavilion' , price : 1200},
            {name : 'Asus Zenfone' , price : 1200},
            {name : 'Amazon Dot' , price : 1200},
            {name : 'JBL Headphones' , price : 1200},

        ],
        cart:[
             
        ],
        total_cost: 0
    },
    methods: {
        add_to_cart: function (prod_name , prod_price) {
            var flag = false;
            for(var i = 0;i < this.cart.length; i++) {
                if(this.cart[i].name == prod_name) {
                    flag = true;
                    this.cart[i].quantity++
                }
            }

            if(!flag)
                this.cart.push({name : prod_name , price : prod_price , quantity : 1})
            this.total_cost += prod_price
        },
        reduce_quantity: function(prod_name) {
            for(var i = 0;i < this.cart.length; i++) {
                if(this.cart[i].name == prod_name) {
                    this.cart[i].quantity--
                    this.total_cost -= this.cart[i].price
                    if(this.cart[i].quantity == 0)
                        this.remove_product(prod_name)
                }
            } 
        },
        remove_product: function(prod_name) {
            /*      remove product code here        */

            for(var i = 0;i < this.cart.length; i++) {
                if(this.cart[i].name == prod_name) {
                    this.total_cost -= this.cart[i].price * this.cart[i].quantity
                    this.cart.splice(i , 1)
                }
            }

        }
    }
})