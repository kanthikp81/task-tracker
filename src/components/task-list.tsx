"use client";
import React, { useState, useEffect } from "react";
import { Task } from "@/types/task-types";
import TaskInput from "./task-input";
import Head from "next/head";

interface TaskListProps {
  tasks: Task[];
  clearTasks: () => void;
  addTask: (taskText: string) => void;
  updateTasks: (tasks: Task[]) => void;
}
const TaskList: React.FC<TaskListProps> = ({
  tasks,
  clearTasks,
  addTask,
  updateTasks,
}) => {
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
    updateTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto">
      <Head>
        <title>Tasks</title>
      </Head>
      <div className="grid grid-cols-1 gap-4 m-4">
        {taskList && taskList.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No tasks to show
          </div>
        ) : (
          <table className="w-full table-auto rounded-xs border-collapse border border-gray-400 bg-white text-sm ">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300">Task</th>
                <th className="border border-gray-300">Completed</th>
                <th className="border border-gray-300">
                  <a
                    onClick={clearTasks}
                    className="text-blue-500 cursor-pointer"
                  >
                    Clear All
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((task) => (
                <tr key={task.id}>
                  <td className="w-3/4 border border-gray-300 text-left">
                    {task.title}
                  </td>
                  <td className="border border-gray-300 text-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(task.id)}
                    />
                  </td>
                  <td className=" w-1/10 border border-gray-300 text-center">
                    <a
                      onClick={() => alert(task.id)}
                      className="text-blue-500 cursor-pointer"
                    >
                      Clear
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <TaskInput addTask={addTask} />
      </div>
    </div>
  );
};

export default TaskList;
