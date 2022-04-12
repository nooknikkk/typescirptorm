"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const list_1 = __importDefault(require("../controllers/list"));
const router = express_1.default.Router();
router.get('/', list_1.default.GetList);
router.post('/create', list_1.default.CreateList);
router.post('/update', list_1.default.UpdateList);
router.post('/delete', list_1.default.DeleteList);
module.exports = router;
