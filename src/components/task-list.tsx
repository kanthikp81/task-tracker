import React, { Fragment } from 'react';
import { Task } from '@/types/task-types';

interface TaskListProps {
    taskList: Task[];
    filter: string;
    toggleTaskCompletion: (id: number) => void;
    onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ taskList, filter, toggleTaskCompletion, onDeleteTask }) => {
    return (
        <div className="mt-7 overflow-x-auto">
            {taskList && taskList.length === 0 ? (
                <div className="text-center text-gray-500 text-lg">
                    {filter === "all" && "No tasks to show. Please add a task to track."}
                    {filter === "completed" && "No completed tasks to show."}
                    {filter === "pending" && "No pending tasks to show."}
                </div>
            ) : (
                <table className="w-full whitespace-nowrap">
                    <tbody>
                        {taskList &&
                            taskList.map((task) => (
                                <Fragment key={task.id}>
                                    <tr
                                        className={`h-16 border border-gray-100 rounded
                                        ${task.completed ? "bg-green-100" : "bg-red-100"}`}
                                    >
                                        <td className="w-1/12">
                                            <div className="ml-5">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox cursor-pointer w-5 h-5 accent-green-500 hover:accent-green-300"
                                                    onChange={() => toggleTaskCompletion(task.id)}
                                                    checked={task.completed}
                                                />
                                            </div>
                                        </td>
                                        <td className="">
                                            <div className="flex items-center pl-5 m-1">
                                                <p className="text-base text-wrap font-medium leading-none text-gray-700 mr-2">
                                                    {task.title}
                                                </p>
                                            </div>
                                        </td>
                                        <td className=" w-1/12 pl-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="size-5 cursor-pointer"
                                                onClick={() => {
                                                    onDeleteTask(task.id);
                                                }}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                />
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="h-3" />
                                </Fragment>
                            ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TaskList;