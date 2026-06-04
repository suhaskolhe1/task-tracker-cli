# Task Tracker CLI

A simple command-line task manager that lets you add, update, delete, and track the status of your tasks. Tasks are stored locally in a `tasks.json` file.

## Requirements

- Node.js v18+

## Usage

Run commands using `node task-cli.js` followed by a command and its arguments.

### Add a task

```bash
node task-cli.js add "Buy groceries"
```

### Update a task

```bash
node task-cli.js update <id> "Updated description"
```

### Delete a task

```bash
node task-cli.js delete <id>
```

### Mark a task as in-progress

```bash
node task-cli.js mark-in-progress <id>
```

### Mark a task as done

```bash
node task-cli.js mark-done <id>
```

### List tasks

```bash
# List all tasks
node task-cli.js list

# List by status
node task-cli.js list todo
node task-cli.js list in-progress
node task-cli.js list done
```

## Task structure

Each task stored in `tasks.json` has the following shape:

```json
{
  "id": 1,
  "description": "Buy groceries",
  "status": "todo",
  "createdAt": "2026-06-04T10:00:00.000Z",
  "updatedAt": "2026-06-04T10:00:00.000Z"
}
```

## Statuses

| Status        | Description                  |
| ------------- | ---------------------------- |
| `todo`        | Task not yet started         |
| `in-progress` | Task is currently in progress |
| `done`        | Task has been completed      |

## Project structure

```
task-tracker-cli/
├── task-cli.js          # Entry point, parses CLI commands
├── tasks.json           # Local task storage (auto-created)
└── services/
    └── taskService.js   # Core task logic (add, update, delete, list)
```
