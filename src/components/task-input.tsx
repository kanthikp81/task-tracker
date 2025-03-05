import React, { useState } from "react";

interface TaskInputProps {
  addTask: (taskText: string) => void;
  onSave: () => void;
  inputRef: React.RefObject<HTMLTextAreaElement|null>;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask, onSave, inputRef }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
      onSave();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-span-full">
        <label
          htmlFor="new-task"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Add a New Task
        </label>
        <div className="mt-2 mb-2">
          <textarea
            ref={inputRef}  
            autoFocus
            tabIndex={11}
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
        tabIndex={12}
        disabled={!taskText.trim()}
        className="cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none disabled:bg-indigo-300 disabled:cursor-default focus:border-2 focus:border-indigo-800"
      >
        Save
      </button>
    </form>
  );
};

export default TaskInput;
