CREATE OR ALTER PROCEDURE getNoteFunc (@id VARCHAR(200))
AS  
    BEGIN 
        SELECT * FROM notesTable WHERE id = @id
    END