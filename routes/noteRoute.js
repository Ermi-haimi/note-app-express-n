import  express from 'express';
import { getNotes, createNote, updateNote, getNoteById, deleteNote } from '../controller/noteController.js';

const router = express.Router()

router.route("/").get(getNotes).post(createNote);
router.route("/:id").patch(updateNote).get(getNoteById).delete(deleteNote);

export default router;