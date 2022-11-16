CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL
);

INSERT INTO book (title, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 	'Harper Lee');


CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age SMALLINT NOT NULL CHECK(age <= 15)
);

INSERT INTO student (name, age)
VALUES ('John',	12), ('Lera', 11), ('Patrick',10), ('Bob',14);


SELECT * FROM book;
SELECT * FROM student;

-- Junction tables
CREATE TABLE book_student (
   book_fk_id INTEGER REFERENCES book (book_id) ON DELETE SET NULL ON UPDATE SET NULL,
   student_fk_id INTEGER  REFERENCES student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
   borrowed_date DATE,
   PRIMARY KEY (book_fk_id, student_fk_id)
)

SELECT * FROM book_student;

INSERT INTO book_student (book_fk_id, student_fk_id, borrowed_date)
VALUES
((SELECT book_id FROM book WHERE title  ILIKE '%Alice In Wonderland%'), 
 (SELECT student_id FROM student WHERE name = 'John'),
 '2022-02-12'
),
((SELECT book_id FROM book WHERE title  ILIKE '%Alice In Wonderland%'), 
 (SELECT student_id FROM student WHERE name = 'Lera'),
 '2022-02-14'
),
((SELECT book_id FROM book WHERE title ILIKE '%To kill a mockingbird%'), 
 (SELECT student_id FROM student WHERE name = 'Bob'),
 NOW()
),
((SELECT book_id FROM book WHERE title ILIKE '%Harry Potter%'), 
 (SELECT student_id FROM student WHERE name = 'Bob'),
 NOW()
);

-- use PK in another table
-- Select the average age of the children, that borrowed the book Alice in Wonderland
-- 2 inner join because we join 3 tables

SELECT ROUND(AVG(student.age))
FROM book_student
INNER JOIN student ON student_fk_id=student_id
INNER JOIN book ON book_fk_id=book_id
WHERE title ILIKE '%Alice In Wonderland%';





