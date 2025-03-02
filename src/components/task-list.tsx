"use client";
import React, { useState, useEffect } from 'react';
import { Task } from '@/types/task-types';
import TaskInput from './task-input';

interface TaskListProps {
    tasks: Task[];
    clearTasks: () => void;
    addTask: (taskText:string) => void;
}
const TaskList: React.FC<TaskListProps> = ({ tasks, clearTasks, addTask }) => {
    const [taskList, setTaskList] = useState<Task[]>(tasks);

    useEffect(() => {
        setTaskList(tasks);
    }
    , [tasks]);
    
    const toggleTaskCompletion = (taskId: number) => {
        setTaskList(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div>
            <ul>
                {taskList.map(task => (
                    <li key={task.id}>
                        <span
                            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                            onClick={() => toggleTaskCompletion(task.id)}
                        >
                            {task.title}
                        </span>
                    </li>
                ))}
            </ul>
            <button onClick={clearTasks}>Clear Tasks</button>
            <TaskInput addTask={addTask} />
        </div>
    );
};



export default TaskList;