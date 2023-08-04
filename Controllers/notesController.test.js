import {createNote,getNotes} from './notesController';
import mssql from 'mssql';

describe('notesController',()=>{
    //scene 1
    describe('create a new Note',()=>{

        it('should create a new note successfully',async()=>{
            const req = {
                body: {
                    title: "The Jitu",
                    content: "Attend Stand up"
                }
            }
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            }
            const mockedInput=jest.fn().mockReturnThis()
            const mockedExecute=jest.fn().mockResolvedValueOnce({rowsAffected:[1]});
    
            const mockedRequest={
                input:mockedInput,
                execute:mockedExecute
              
            }
            const mocekedPool={
                // connected:true,
                request: jest.fn().mockReturnValue(mockedRequest)
            }
            jest.spyOn(mssql,'connect').mockResolvedValue(mocekedPool)
    
            await createNote(req,res)
        

            expect(mockedInput).toHaveBeenCalledWith('title','The Jitu')
            expect(mockedExecute).toHaveBeenCalledWith('createNoteFunc')
            expect(res.json).toHaveBeenCalledWith({
                message: 'New Note created Successfully'
            })
        })
      
    })
    describe('Getting all notes function',()=>{

        it('should get all existing notes successfully',async()=>{
            const mockNote=[
                { id:"dgfsdfsdfh-dfbjsbdfbds-dsfnjdsfnj",
                title: "The Jitu",
                content:"Attend Stand up"}
               
        ]
            const request={}
            
            jest.spyOn(mssql, "connect").mockResolvedValueOnce({
                request: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValueOnce({
                    recordset: mockProject
                })
            })
            await getNotes(request,res)
            expect(res.status).toHaveBeenCalledWith(200)
        })

    })
})