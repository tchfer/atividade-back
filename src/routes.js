"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TasksController_1 = require("./controller/TasksController");
const TasksController_2 = require("./controller/TasksController");
const TasksController_3 = require("./controller/TasksController");
const TasksController_4 = require("./controller/TasksController");
const TasksController_5 = require("./controller/TasksController");
const TasksController_6 = require("./controller/TasksController");
const routes = (0, express_1.Router)();
routes.get('/home', (request, response) => {
    return response.json({ message: 'Hello Turma 007!' });
});
routes.get('/tasks', TasksController_1.getTasks);
routes.post('/tasks', TasksController_2.saveTask);
routes.get('/tasks/:id', TasksController_3.getTask);
routes.put('/tasks/:id', TasksController_4.updateTask);
routes.delete('/tasks/:id', TasksController_5.deleteTask);
routes.patch('/tasks/:id', TasksController_6.finishedTask);
exports.default = routes;
//# sourceMappingURL=routes.js.map