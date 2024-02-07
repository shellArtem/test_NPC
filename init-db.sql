-- База данных создавалась и заполнялась при помощи sequelize. Данный скрипт является примером и написан исключительно для ТЗ.

-- Создание базы данных
CREATE DATABASE database_testNPC;

-- Подключение к базе данных
\c database_testNPC;

-- Создание таблицы "users"
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(100),
    date_of_birth DATE
);

-- Создание таблицы "orders"
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    product_name VARCHAR(100),
    total_price NUMERIC(10, 2)
);

-- Заполнение таблицы "users" данными
INSERT INTO users (name, phone, date_of_birth) VALUES 
    ('John Doe', '55(764)872-22-13', '1995-05-12'),
    ('Jane Smith', '55(764)872-22-13', '1990-10-20'),
    ('Sam Brown', '55(764)872-22-13', '1998-03-15');

-- Заполнение таблицы "orders" данными
INSERT INTO orders (user_id, product_name, total_price) VALUES 
    (1, 'Phone case', 25.00),
    (2, 'Laptop', 800.00),
    (3, 'Headphones', 50.00);