const {Router} = require('express');
const {createNote, getNotes, getOneNote, updateNote, deleteNote } = require('../Controllers/notesController');


const notesRouter = Router();

notesRouter.post('/', createNote);
notesRouter.get('/', getNotes);
notesRouter.get('/:id', getOneNote);
notesRouter.put('/:id', updateNote);
notesRouter.delete('/:id', deleteNote);

module.exports = {
    notesRouter
}