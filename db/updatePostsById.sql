UPDATE posts SET comment = $2 WHERE id = $1;
SELECT * FROM posts WHERE locationid = $3 ORDER BY created_at DESC;