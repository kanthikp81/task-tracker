import React from 'react';

interface TaskActionsProps {
    clearAll: boolean;
    onClearAll: () => void;
    onAddTask: () => void;
}

const TaskActions: React.FC<TaskActionsProps> = ({ onAddTask, onClearAll, clearAll }) => {
    return (
        <div className="flex items-center">
            <button
                onClick={onAddTask}
                className="m-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            >
                <p className="text-sm font-medium leading-none text-white">
                    Add Task
                </p>
            </button>
            <button
                disabled={!clearAll}
                onClick={onClearAll}
                className="m-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded disabled:opacity-50"
            >
                <p className="text-sm font-medium leading-none text-white">
                    Clear All
                </p>
            </button>
        </div>
    );
};

export default TaskActions;