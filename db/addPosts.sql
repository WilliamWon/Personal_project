INSERT INTO posts (username,comment,posting_time,userid,locationid) VALUES ($1,$2,$3,$4,$5);
SELECT * FROM posts WHERE locationid = $5 ORDER BY created_at DESC;