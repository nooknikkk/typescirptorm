import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import { Task } from '../models/task';

const NAMESPACE = 'Task';

const GetTask = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Getting all Task.');
    try {
        const task = await Task.findAll({order: [
            ['sort_table', 'ASC'],
        ],});
        res.status(200).json({
            status: 200,
            data: task
        });
    } catch (error) {
        next(error);
    }
};

const FindTask = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Getting Task.');
    let { id } = req.body;
     try {
        const list = await Task.findByPk(id);
        if (list) {
            res.status(200).json({
            status: 200,
            data: list
        });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Not Found'
            });
        }

        
    } catch (error) {
        next(error);
    }
};

const CreateTask = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Insert Task.');

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
    // if (!thumbnail) {
    //     return res.status(500).json({
    //         message: 'thumbnail required'
    //     });
    // }
    // if (!startDate) {
    //     return res.status(500).json({
    //         message: 'startDate required'
    //     });
    // }
    // if (!endDate) {
    //     return res.status(500).json({
    //         message: 'endDate required'
    //     });
    // }
    // if (!labels) {
    //     return res.status(500).json({
    //         message: 'labels required'
    //     });
    // }
    // if (!member) {
    //     return res.status(500).json({
    //         message: 'member required'
    //     });
    // }
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
        const task = await Task.create(req.body);
        res.status(200).json({
            status: 200,
            data: task
        });
    } catch (error) {
        next(error);
    }
};

const UpdateTask = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Update Task.');

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
    // if (!thumbnail) {
    //     return res.status(500).json({
    //         message: 'thumbnail required'
    //     });
    // }
    // if (!startDate) {
    //     return res.status(500).json({
    //         message: 'startDate required'
    //     });
    // }
    // if (!endDate) {
    //     return res.status(500).json({
    //         message: 'endDate required'
    //     });
    // }
    // if (!labels) {
    //     return res.status(500).json({
    //         message: 'labels required'
    //     });
    // }
    // if (!member) {
    //     return res.status(500).json({
    //         message: 'member required'
    //     });
    // }
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
        const task = await Task.findByPk(id);
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
        } else {
            res.status(404).json({
                status: 404,
                message: 'Not Found'
            });
        }

        res.status(200).json({
            status: 200,
            data: task
        });
    } catch (error) {
        next(error);
    }
};

const DeleteTask = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Delete Task.');

    let { id } = req.body;

    if (!id) {
        return res.status(500).json({
            message: 'id required'
        });
    }

    try {
        const task = await Task.destroy({
            where: {
                id: id
            }
        });

        res.status(200).json({
            status: 200,
            data: task
        });
    } catch (error) {
        next(error);
    }
};



const SortTask = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Sor tList.');
    let { id } = req.body;
     try {
          for (let index = 0; index < id.length; index++) {
             const element = id[index];
            const list = await Task.findByPk(element);
        if (list) {
             list.sort_table = index+1;
            await list.save();
        }
         }
        // const list = await List.findByPk(id);
        if (req.body) {
            res.status(200).json({
            status: 200,
            data: req.body
        });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Not Found'
            });
        }

        
    } catch (error) {
        next(error);
    }
};

export default { GetTask, FindTask,CreateTask, UpdateTask, DeleteTask , SortTask};
