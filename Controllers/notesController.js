const mssql = require ('mssql');
const { sqlConfig } = require('../Config/config');
const {v4} = require('uuid')

const notes = [];

class Note{
    constructor(id, title,content, timeStamp){
        this.id = id,
        this.title = title,
        this.content = content,
        this.timeStamp = timeStamp
       
    }
}

const createNote = async(req, res)=>{
    try {
        const id = v4()

        const {title,content, timeStamp} = req.body

        const pool = await mssql.connect(sqlConfig)

        if(pool.connected){

            console.log(req.body);

        const result = await pool.request()
        .input('id',id)
        .input('title',title)
        .input('content',content)
        .input('timeStamp',timeStamp)
        
        .execute('createNoteFunc'); 
    }
    } catch (error) {
        return res.json({error})
    }
}

const getNotes = async(req, res)=>{
    try {
        const pool = await (mssql.connect(sqlConfig))
        // console.log(req.app.locals.db)


        const allnotes = (await pool.request().execute('getNotes')).recordset

        res.json({notes: allnotes})
    } catch (error) {
        return res.json({error})
    }
}

const getOneNote = async(req, res)=>{
    try {
        const {id} = req.params

        const pool = await mssql.connect(sqlConfig)

        const note = (await pool.request().input('id', id).execute('getOneNote')).recordset

        return res.json({
            note: note
        })
    } catch (error) {
        return res.json({error})
    }
}

const updateNote = async(req, res)=>{
    try {
        const {id} = req.params

        const {title, content, timeStamp} = req.body

        const pool = await mssql.connect(sqlConfig)

        const result = (await pool.request()
        .input('id',id)
        .input('title',title)
        .input('content',content)
        .input('timeStamp',timeStamp)

        .execute('updateNote'));

        console.log(result);

        if(result.rowsAffected == 1){
            res.json({
                message: 'note updated successfully'
            })
        }else{
            res.json({
                message: 'notes not found'
            })
        }
    } catch (error) {
        return res.json({Error: error})
    }
}

const deleteNote = async (req, res)=>{
    try {
       const id = req.params.id

        const pool = await mssql.connect(sqlConfig)

        const result = await pool.request()
        .input('id', id)
        .execute('deleteNote')
      
        if(result.rowsAffected == 1){
            res.json({
                    message: 'note deleted successfully'
            })
        }else{
            res.json({
                message: 'note not found'
        })
        }
    } catch (error) {
        return res.json({Error: error})
    }
}

module.exports ={
    createNote,
    getNotes,
    getOneNote,
    updateNote,
    deleteNote
}