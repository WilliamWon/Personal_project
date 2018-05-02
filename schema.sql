CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    authid VARCHAR(50),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(150),
    street_address VARCHAR(150),
    city VARCHAR(50),
    state VARCHAR(50),
    zipcode INTEGER,
    username VARCHAR(50)
);

CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50),
	comment TEXT, 
	posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
	posting_time TIME NOT NULL,
	userid INTEGER, FOREIGN KEY(userid) REFERENCES users(userid),
	locationid TEXT
    created_at TIMESTAMPTZ NOW()
)
