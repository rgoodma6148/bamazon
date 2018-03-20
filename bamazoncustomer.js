var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: "3000",
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err){
  console.log("working?");

   showProducts();
});
  function showProducts(){

    connection.query("SELECT * FROM products", function(err,res){
      for(var i = 0; i <res.length; i++){
        console.log(res[i].item_id+" || "+res[i].product_name+" || "+res[i].department_name+" || "+res[i].price+" || "+res[i].stock_quantity+"/n");
      }
      promptCustomer(res);
    })
  }
var promptCustomer = function(res){
  inquirer.prompt([{
    type: "input",
    name: "choice",
    message "what would you like to purchase? [Quit with Q]"
  }]).then(function(answer){
    var correct = false;
    for(var i=0; i<res.length;i++){
      if(res[i].productname==answer.choice){
        correct=true;
        var product = answer.choice;
        var id =i;

        inquirer.prompt({
          type: "input",
          name: "quantity",
          message: "how many would you like to buy?",

          validate: function(value){
            if(isNaN(value)==false){
              return true;
            } else{
              return false;
            }
          }
        }).then(function(answer){
          if((res[id].stockquantity-answer.quant)>0{
            connection.query("UPDATE products SET stockquantity="+(res[id].stockquantity-answer.quant)+"WHERE product_name= "+product+"", function(err,res2){
              console.log("Product Purchased!");
              showProducts();
            })
            else{
              console.log("Insufficient quantity!");
              promptCustomer(res);
            }
          })
        })
      }
    }
  })
}
