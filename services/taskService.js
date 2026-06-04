import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "tasks.json");

export const loadTasks = ()=>{
    if(!fs.existsSync(FILE_PATH)){
        fs.writeFileSync(FILE_PATH,JSON.stringify([],null,2));

    }

    const data = fs.readFileSync(FILE_PATH,"utf-8");

    return JSON.parse(data);
}

export const saveTasks = (task) =>{
    fs.writeFileSync(FILE_PATH,JSON.stringify(task,null,2));
}

export const addTask = (description)=>{
    const tasks = loadTasks();

    const task = {
    id:tasks.length>0 ? Math.max(...tasks.map((t)=>t.id))+1 : 1,
    description,
    status:"todo",
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString(),
    };

    tasks.push(task);
    saveTasks(tasks);

    console.log(`Task added successfully (ID: ${task.id})`);
};

export const updateTask = (id,description)=>{
    const tasks = loadTasks();
    const task =tasks.find((t)=>t.id==Number(id));

    if(!task){
       return console.log("Task not found");
    }

    task.description = description;
    task.updatedAt = new Date().toISOString();

    saveTasks(tasks);

   console.log("Task updated successfully");
};

export const deleteTask = ()=>{
    const tasks = loadTasksO();
    const filtered = tasks.filter(
        (t) => t.id !== Number(id)
    );
    
    if (filtered.length === tasks.length) {
    return console.log("Task not found");
    }

    saveTasks(filtered);

    console.log("Task deleted successfully");
}

export const updateStatus = (id, status) => {
    const tasks = loadTasks();

    const task = tasks.find(
        (t) => t.id === Number(id)
    );

    if (!task) {
        return console.log("Task not found");
    }

    task.status = status;
    task.updatedAt = new Date().toISOString();

    saveTasks(tasks);

    console.log(`Task marked as ${status}`);
};
export const listTasks = (status = null) => {
  const tasks = loadTasks();

  const result = status
    ? tasks.filter((t) => t.status === status)
    : tasks;

  if (result.length === 0) {
    return console.log("No tasks found");
  }

  console.table(result);
};

