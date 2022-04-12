"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const task_1 = require("../models/task");
const NAMESPACE = 'Task';
const GetTask = async (req, res, next) => {
    logging_1.default.info(NAMESPACE, 'Getting all Task.');
    try {
        const task = await task_1.Task.findAll();
        res.status(200).json({
            status: 200,
            data: task
        });
    }
    catch (error) {
        next(error);
    }
};
const CreateTask = async (req, res, next) => {
    logging_1.default.info(NAMESPACE, 'Insert Task.');
    let { title, description, thumbnail, startDate, endDate, labels, member, createBy, list_id } = req.body;
    if (!title) {
        return res.status(500).json({
            message: 'title required'
        });
    }
    if (!description) {
        return res.status(500).json({
            message: 'description required'
        });
    }
    if (!thumbnail) {
        return res.status(500).json({
            message: 'thumbnail required'
        });
    }
    if (!startDate) {
        return res.status(500).json({
            message: 'startDate required'
        });
    }
    if (!endDate) {
        return res.status(500).json({
            message: 'endDate required'
        });
    }
    if (!labels) {
        return res.status(500).json({
            message: 'labels required'
        });
    }
    if (!member) {
        return res.status(500).json({
            message: 'member required'
        });
    }
    if (!createBy) {
        return res.status(500).json({
            message: 'createBy required'
        });
    }
    if (!list_id) {
        return res.status(500).json({
            message: 'list_id required'
        });
    }
    try {
        const task = await task_1.Task.create(req.body);
        res.status(200).json({
            status: 200,
            data: task
        });
    }
    catch (error) {
        next(error);
    }
};
const UpdateTask = async (req, res, next) => {
    logging_1.default.info(NAMESPACE, 'Update Task.');
    let { id, title, description, thumbnail, startDate, endDate, labels, member, updateBy, updateDate, list_id } = req.body;
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
    if (!description) {
        return res.status(500).json({
            message: 'description required'
        });
    }
    if (!thumbnail) {
        return res.status(500).json({
            message: 'thumbnail required'
        });
    }
    if (!startDate) {
        return res.status(500).json({
            message: 'startDate required'
        });
    }
    if (!endDate) {
        return res.status(500).json({
            message: 'endDate required'
        });
    }
    if (!labels) {
        return res.status(500).json({
            message: 'labels required'
        });
    }
    if (!member) {
        return res.status(500).json({
            message: 'member required'
        });
    }
    if (!updateBy) {
        return res.status(500).json({
            message: 'updateBy required'
        });
    }
    if (!list_id) {
        return res.status(500).json({
            message: 'list_id required'
        });
    }
    try {
        const task = await task_1.Task.findByPk(id);
        if (task) {
            task.title = title;
            task.description = description;
            task.thumbnail = thumbnail;
            task.startDate = startDate;
            task.endDate = endDate;
            task.labels = labels;
            task.member = member;
            task.updateBy = updateBy;
            await task.save();
        }
        else {
            res.status(404).json({
                status: 404,
                message: 'Not Found'
            });
        }
        res.status(200).json({
            status: 200,
            data: task
        });
    }
    catch (error) {
        next(error);
    }
};
const DeleteTask = async (req, res, next) => {
    logging_1.default.info(NAMESPACE, 'Delete Task.');
    let { id } = req.body;
    if (!id) {
        return res.status(500).json({
            message: 'id required'
        });
    }
    try {
        const task = await task_1.Task.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json({
            status: 200,
            data: task
        });
    }
    catch (error) {
        next(error);
    }
};
exports.default = { GetTask, CreateTask, UpdateTask, DeleteTask };
