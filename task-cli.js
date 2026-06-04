import {
  addTask,
  updateTask,
  deleteTask,
  updateStatus,
  listTasks,
} from "./services/taskService.js";

const args = process.argv.slice(2);

const command = args[0];

switch (command) {
  case "add":
    addTask(args[1]);
    break;

  case "update":
    updateTask(args[1], args[2]);
    break;

  case "delete":
    deleteTask(args[1]);
    break;

  case "mark-in-progress":
    updateStatus(args[1], "in-progress");
    break;

  case "mark-done":
    updateStatus(args[1], "done");
    break;

  case "list":
    listTasks(args[1]);
    break;

  default:
    console.log(`
Commands:

node task-cli add "Task"

node task-cli update 1 "New Task"

node task-cli delete 1

node task-cli mark-in-progress 1

node task-cli mark-done 1

node task-cli list

node task-cli list done

node task-cli list todo

node task-cli list in-progress
`);
}