CREATE TABLE customer (
    id SERIAL PRIMARY KEY, 
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR(50) NOT NULL
);

INSERT INTO customer (first_name, last_name) 
VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

INSERT INTO customer 
VALUES (DEFAULT, 'Tom', 'ABC');


CREATE TABLE customerProfile (
    id SERIAL PRIMARY KEY, 
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INTEGER UNIQUE REFERENCES customer (id) ON DELETE CASCADE ON UPDATE CASCADE
    -- ONE TO ONE RELATIONSHIP
)

INSERT INTO customerProfile (customer_id, isLoggedIn)
VALUES ((SELECT id FROM customer WHERE first_name='John' AND last_name='Doe'), TRUE),
((SELECT id FROM customer WHERE first_name='Jerome' AND last_name='Lalu'), FALSE)

INSERT INTO customerProfile (customer_id)
VALUES ((SELECT id FROM customer WHERE first_name='Vanessa' AND last_name='ABC'))


SELECT * FROM customerProfile;
SELECT * FROM customer;

-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers

SELECT first_name
FROM customer
INNER JOIN customerProfile
ON customer.id = customerProfile.customer_id
WHERE customerProfile.isLoggedIn = TRUE;

SELECT first_name
FROM customer
INNER JOIN customerProfile
ON customer.id = customerProfile.customer_id
WHERE customerProfile.isLoggedIn; -- don't need to specify = TRUE


-- All the customers first_name and isLoggedIn columns 
-- even the customers those who don’t have a profile.

-- TABLE1 customer -- everything
-- TABLE2 customerProfile -- the common data

SELECT first_name, isLoggedIn
FROM customer
LEFT JOIN customerProfile
ON customer.id = customerProfile.customer_id;


-- The number of customers that are not LoggedIn

SELECT first_name AS not_logged_in, isLoggedIn
FROM customer
FULL JOIN customerProfile
ON customer.id = customerProfile.customer_id
WHERE isLoggedIn IS NOT TRUE; -- IS NOT considers the value NULL


SELECT first_name AS not_logged_in, isLoggedIn
FROM customer
FULL JOIN customerProfile
ON customer.id = customerProfile.customer_id
WHERE isLoggedIn NOT IN (TRUE); -- NOT IN doesn't consider the value NULL


SELECT first_name AS not_logged_in, isLoggedIn
FROM customer
FULL JOIN customerProfile
ON customer.id = customerProfile.customer_id
WHERE NOT isLoggedIn; -- NOT doesn't consider the value NULL






