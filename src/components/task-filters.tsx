import React from 'react';

interface TaskFiltersProps {
    filter: string;
    setFilter: (status: string) => void;
    filterTasks: (status: string) => void;
}

const TaskFilters: React.FC<TaskFiltersProps> = ({ filter, setFilter, filterTasks }) => {
    return (
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
    );
};

export default TaskFilters;