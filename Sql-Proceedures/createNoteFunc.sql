CREATE OR ALTER PROCEDURE createNoteFunc(@id VARCHAR(200), @title  VARCHAR(200), @content VARCHAR(500))
AS
BEGIN
    INSERT INTO notesTable( id, title,content) VALUES (@id, @title, @content)
END