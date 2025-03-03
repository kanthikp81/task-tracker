import React from 'react';

interface TaskActionsProps {
    setShowTaskModal: (show: boolean) => void;
    setShowDeleteModal: (show: boolean) => void;
    clearAll: boolean;
}

const TaskActions: React.FC<TaskActionsProps> = ({ setShowTaskModal, setShowDeleteModal, clearAll }) => {
    return (
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
                disabled={!clearAll}
                onClick={() => setShowDeleteModal(true)}
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