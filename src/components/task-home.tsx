"use client";
import React, { useEffect, useState} from "react";
import { Task } from "@/types/task-types";
import TaskFilters from "./task-filters";
import TaskActions from "./task-actions";
import DeleteTaskModal from "./delete-task-modal";
import AddTaskModal from "./add-task-modal";
import TaskList from "./task-list";

interface TaskHomeProps {
  tasks: Task[];
  clearTasks: () => void;
  addTask: (taskText: string) => void;
  updateTasks: (tasks: Task[]) => void;
}
const TaskHome: React.FC<TaskHomeProps> = ({
  tasks,
  clearTasks,
  addTask,
  updateTasks,
}) => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(0);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTaskList(tasks);
  }
  , [tasks]);

  const filterTasks = (filter: string) => {
    if (filter === "all") {
      return tasks;
    } else if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else {
      return tasks.filter((task) => !task.completed);
    }
  };

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTaskList);
    updateTasks(updatedTaskList);
  };
  const onDelete = () => {
    if (deleteTaskId === 0) {
        clearTasks();
    } else {
        updateTasks(taskList.filter((task) => task.id !== deleteTaskId));
        setDeleteTaskId(0);
    }
    setShowDeleteModal(false);
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
              <TaskFilters filter={filter} 
                onFilterChange={(newFilter)=>{ setFilter(newFilter); filterTasks(newFilter);}}  />
              <TaskActions onAddTask={()=>setShowTaskModal(true)} onClearAll={()=>setShowDeleteModal(true)} clearAll={taskList.length !== 0} />
            </div>
            
            <TaskList 
            taskList={filterTasks(filter)}  
            filter={filter}
            toggleTaskCompletion={toggleTaskCompletion}
            onDeleteTask={(id)=>{setDeleteTaskId(id); setShowDeleteModal(true);}}
            />
          </div>
        </div>
      </div>
      <AddTaskModal isOpen={showTaskModal} onClose={()=>setShowTaskModal(false)} addTask={addTask} />
      <DeleteTaskModal 
       isOpen={showDeleteModal}
       deleteTaskId={deleteTaskId}
       onDelete={onDelete}
       onCancel={()=>setShowDeleteModal(false)}
       />

    </>
  );
};

export default TaskHome;
