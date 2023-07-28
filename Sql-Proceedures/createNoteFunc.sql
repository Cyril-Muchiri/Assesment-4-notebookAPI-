CREATE OR ALTER PROCEDURE createNoteFunc(@id VARCHAR(200), @title  VARCHAR(200), @content VARCHAR(500), @timeStamp VARCHAR(200))
AS
BEGIN
    INSERT INTO notesTable( id, title,content,stamp) VALUES (@id, @title, @content, @timeStamp)
END