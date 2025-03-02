"use client";
import React, { useState, useEffect, Fragment } from "react";
import { Task } from "@/types/task-types";
import Modal from "./modal";
import TaskInput from "./task-input";
import DeleteWarning from "./delete-warning";

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
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(0);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTaskList(filterTasks(filter));
  }, [tasks, filter]);

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
    updateTasks(updatedTasks);
  };

  const filterTasks = (filter: string) => {
    if (filter === "all") {
      return tasks;
    } else if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else {
      return tasks.filter((task) => !task.completed);
    }
  };

  return (
    <>
      <div>
        <div className="sm:px-6 w-full">
          <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="flex items-center justify-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Tasks
              </p>
            </div>
          </div>
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="sm:flex items-center justify-between">
              <div className="flex items-center">
                <a
                  onClick={() => {
                    setFilter("all");
                    filterTasks("all");
                  }}
                >
                  <div
                    className={`py-2 px-8 rounded-full ml-2 sm:ml-4
                      ${
                        filter === "all"
                          ? " bg-indigo-100 text-indigo-700"
                          : " text-gray-600 hover:text-indigo-700 hover:bg-indigo-100"
                      }   `}
                  >
                    <p>All</p>
                  </div>
                </a>
                <a
                  onClick={() => {
                    setFilter("completed");
                    filterTasks("completed");
                  }}
                >
                  <div
                    className={`py-2 px-8 rounded-full ml-2 sm:ml-4
                        ${
                          filter === "completed"
                            ? " bg-indigo-100 text-indigo-700"
                            : " text-gray-600 hover:text-indigo-700 hover:bg-indigo-100"
                        }   `}
                  >
                    <p>Completed</p>
                  </div>
                </a>
                <a
                  onClick={() => {
                    setFilter("pending");
                    filterTasks("pending");
                  }}
                >
                  <div
                    className={`py-2 px-8 rounded-full ml-2 sm:ml-4
                        ${
                          filter === "pending"
                            ? "bg-indigo-100 text-indigo-700"
                            : "text-gray-600 hover:text-indigo-700 hover:bg-indigo-100"
                        }   `}
                  >
                    <p>Pending</p>
                  </div>
                </a>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => setShowTaskModal(true)}
                  className="m-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                >
                  <p className="text-sm font-medium leading-none text-white">
                    Add Task
                  </p>
                </button>
                <button
                  onClick={clearTasks}
                  className="m-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                >
                  <p className="text-sm font-medium leading-none text-white">
                    Clear All
                  </p>
                </button>
              </div>
            </div>
            <div className="mt-7 overflow-x-auto">
              {taskList && taskList.length === 0 ? (
                <div className="text-center text-gray-500 text-lg">
                  {filter === "all" &&
                    "No tasks to show. Please add a task to track."}
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
                              <div className="flex items-center pl-5">
                                <p className="text-base font-medium leading-none text-gray-700 mr-2">
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
                                  setDeleteTaskId(task.id);
                                  setShowDeleteModal(true);
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
          </div>
        </div>
      </div>
      <Modal
        isOpen={showTaskModal}
        onClose={() => {
          setShowTaskModal(false);
        }}
      >
        <TaskInput addTask={addTask} onSaved={() => setShowTaskModal(false)} />
      </Modal>
      <Modal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
        }}
      >
        <DeleteWarning
          onDelete={() => {
            updateTasks(taskList.filter((task) => task.id !== deleteTaskId));
            setShowDeleteModal(false);
          }}
          onCancel={() => setShowDeleteModal(false)}
        />
      </Modal>
    </>
  );
};

export default TaskList;
