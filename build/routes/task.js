"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const task_1 = __importDefault(require("../controllers/task"));
const router = express_1.default.Router();
router.get('/', task_1.default.GetTask);
router.post('/create', task_1.default.CreateTask);
router.post('/update', task_1.default.UpdateTask);
router.post('/delete', task_1.default.DeleteTask);
module.exports = router;
