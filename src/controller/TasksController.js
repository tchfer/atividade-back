"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finishedTask = exports.deleteTask = exports.updateTask = exports.getTask = exports.saveTask = exports.getTasks = void 0;
const typeorm_1 = require("typeorm");
const Tasks_1 = require("../entity/Tasks");
const getTasks = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield (0, typeorm_1.getRepository)(Tasks_1.Tasks).find();
    return response.json(tasks);
});
exports.getTasks = getTasks;
const saveTask = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield (0, typeorm_1.getRepository)(Tasks_1.Tasks).save(request.body);
    return response.json(task);
});
exports.saveTask = saveTask;
const getTask = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const task = yield (0, typeorm_1.getRepository)(Tasks_1.Tasks).findOne({ where: { id: parseInt(request.params.id) } });
    return response.json(task);
});
exports.getTask = getTask;
const updateTask = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const task = yield (0, typeorm_1.getRepository)(Tasks_1.Tasks).update(id, request.body);
    if (task.affected == 1) {
        const taskUpdated = yield (0, typeorm_1.getRepository)(Tasks_1.Tasks).findOne({ where: { id: parseInt(request.params.id) } });
        return response.json(taskUpdated);
    }
    else {
        return response.status(404).json({ message: 'Tarefa não encontrada!' });
    }
});
exports.updateTask = updateTask;
const deleteTask = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const task = yield (0, typeorm_1.getRepository)(Tasks_1.Tasks).delete(id);
    if (task.affected == 1) {
        return response.status(200).json({ message: 'Tarefa excluída com sucesso!' });
    }
    else {
        return response.status(404).json({ message: 'Tarefa não encontrada!' });
    }
});
exports.deleteTask = deleteTask;
const finishedTask = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const task = yield (0, typeorm_1.getRepository)(Tasks_1.Tasks).update(id, {
        finished: true,
    });
    if (task.affected == 1) {
        const taskFinished = yield (0, typeorm_1.getRepository)(Tasks_1.Tasks).findOne({ where: { id: parseInt(request.params.id) } });
        return response.json(taskFinished);
    }
    else {
        return response.status(404).json({ message: 'Tarefa não encontrada!' });
    }
});
exports.finishedTask = finishedTask;
//# sourceMappingURL=TasksController.js.map