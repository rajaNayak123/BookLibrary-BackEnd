import express from 'express';
import {createStudent} from '../controller/bookController.mjs'
const router = express.Router();
router.post('/addstudent', createStudent);
export default router
