"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const list_1 = require("../models/list");
const task_1 = require("../models/task");
const NAMESPACE = 'List';
const GetList = async (req, res, next) => {
    logging_1.default.info(NAMESPACE, 'Getting all List.');
    try {
        const lists = await list_1.List.findAll();
        res.status(200).json({
            status: 200,
            data: lists
        });
    }
    catch (error) {
        next(error);
    }
};
const CreateList = async (req, res, next) => {
    logging_1.default.info(NAMESPACE, 'Insert List.');
    let { title, createBy } = req.body;
    if (!title) {
        return res.status(500).json({
            message: 'title required'
        });
    }
    if (!createBy) {
        return res.status(500).json({
            message: 'createBy required'
        });
    }
    try {
        const list = await list_1.List.create(req.body);
        res.status(200).json({
            status: 200,
            data: list
        });
    }
    catch (error) {
        next(error);
    }
};
const UpdateList = async (req, res, next) => {
    logging_1.default.info(NAMESPACE, 'Update List.');
    let { id, title, updateBy } = req.body;
    if (!id) {
        return res.status(500).json({
            message: 'id required'
        });
    }
    if (!title) {
        return res.status(500).json({
            message: 'title required'
        });
    }
    if (!updateBy) {
        return res.status(500).json({
            message: 'updateBy required'
        });
    }
    try {
        const list = await list_1.List.findByPk(id);
        if (list) {
            list.title = title;
            list.updateBy = updateBy;
            await list.save();
        }
        else {
            res.status(404).json({
                status: 404,
                message: 'Not Found'
            });
        }
        res.status(200).json({
            status: 200,
            data: list
        });
    }
    catch (error) {
        next(error);
    }
};
const DeleteList = async (req, res, next) => {
    logging_1.default.info(NAMESPACE, 'Delete List.');
    let { id } = req.body;
    if (!id) {
        return res.status(500).json({
            message: 'id required'
        });
    }
    try {
        const list = await list_1.List.destroy({
            where: {
                id: id
            }
        });
        const task = await task_1.Task.destroy({
            where: {
                list_id: id
            }
        });
        res.status(200).json({
            status: 200,
            data: list
        });
    }
    catch (error) {
        next(error);
    }
};
exports.default = { GetList, CreateList, UpdateList, DeleteList };
