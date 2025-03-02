import React, { useState } from "react";

interface TaskInputProps {
  addTask: (taskText: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-span-full">
        <label
          htmlFor="new-task"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Add New Task
        </label>
        <div className="mt-2 mb-2">
          <textarea
            name="new-task"
            id="new-task"
            rows={2}
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none disabled:bg-indigo-300 sm:w-auto dark:disabled:bg-indigo-800 dark:disabled:text-indigo-400"
      >
        Save
      </button>
    </form>
  );
};

export default TaskInput;
