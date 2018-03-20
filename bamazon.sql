DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NULL,
department_name VARCHAR(50) NULL,
price DECIMAL(10,4) NULL,
stock_quantity INT(10) NULL,
primary key (item_id)
);


INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Apple", "Produce", 1.99,100),
				("Grapes", "Produce", 4.85, 99),
                ("Bread", "Bakery", 2.00, 15)





SELECT * FROM products;
