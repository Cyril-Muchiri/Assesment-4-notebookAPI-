CREATE OR ALTER PROCEDURE updateNoteFunc (@id VARCHAR(200), @title  VARCHAR(500), @content VARCHAR(500), @timeStamp VARCHAR(200))
AS
    BEGIN
        UPDATE notesTable SET id= @id, title = @title, content = @content, stamp= @timeStamp WHERE id= @id
    END