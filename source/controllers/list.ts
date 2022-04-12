import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import { List } from '../models/list';
import { Task } from '../models/task';

const NAMESPACE = 'List';

const GetList = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Getting all List.');
    try {
        const lists = await List.findAll({order: [
            ['sort_table', 'ASC'],
        ],});
        res.status(200).json({
            status: 200,
            data: lists
        });
    } catch (error) {
        next(error);
    }
};

const FindList = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Getting List.');
    let { id } = req.body;
     try {
        const list = await List.findByPk(id);
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

const CreateList = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Insert List.');

    let { id, title, createBy } = req.body;

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
        const list = await List.create(req.body);
        res.status(200).json({
            status: 200,
            data: list
        });
    } catch (error) {
        next(error);
    }
};

const UpdateList = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Update List.');

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
       
        const list = await List.findByPk(id);
        if (list) {
            list.title = title;
            list.updateBy = updateBy;
            await list.save();
        } else {
            res.status(404).json({
                status: 404,
                message: 'Not Found'
            });
        }

        res.status(200).json({
            status: 200,
            data: list
        });
    } catch (error) {
        next(error);
    }
};

const DeleteList = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Delete List.');
    let { id } = req.body;
    if (!id) {
        return res.status(500).json({
            message: 'id required'
        });
    }

    try {
        const list = await List.destroy({
            where: {
                id: id
            }
        });

        const task = await Task.destroy({
            where: {
                list_id: id
            }
        });

        res.status(200).json({
            status: 200,
            data: list
        });
    } catch (error) {
        next(error);
    }
};


const SortList = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Sort List.');
    let { id } = req.body;
     try {
          for (let index = 0; index < id.length; index++) {
             const element = id[index];
            const list = await List.findByPk(element);
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

export default { GetList, FindList, CreateList, UpdateList, DeleteList, SortList};
