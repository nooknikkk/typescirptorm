import express from 'express';
import controller from '../controllers/task';

const router = express.Router();

router.get('/', controller.GetTask);
router.post('/find', controller.FindTask);
router.post('/create', controller.CreateTask);
router.post('/update', controller.UpdateTask);
router.post('/delete', controller.DeleteTask);
router.post('/sort', controller.SortTask);

export = router;
