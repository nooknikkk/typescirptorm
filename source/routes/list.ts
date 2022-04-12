import express from 'express';
import controller from '../controllers/list';

const router = express.Router();

router.get('/', controller.GetList);
router.post('/find', controller.FindList);
router.post('/create', controller.CreateList);
router.post('/update', controller.UpdateList);
router.post('/delete', controller.DeleteList);
router.post('/sort', controller.SortList);

export = router;
