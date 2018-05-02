UPDATE users SET username = $1, email = $2, street_address = $3, city = $4, state = $5, zipcode = $6
WHERE authid = $7;
SELECT * FROM users WHERE authid = $7;