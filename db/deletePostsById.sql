DELETE FROM posts WHERE id = $1;
SELECT * FROM posts WHERE locationid = $2 ORDER BY created_at DESC;