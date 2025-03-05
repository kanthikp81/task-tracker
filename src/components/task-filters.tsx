import React from 'react';

interface TaskFiltersProps {
    filter: string;
    onFilterChange: (filter: string) => void;
}

const TaskFilters: React.FC<TaskFiltersProps> = ({ filter, onFilterChange }) => {
    return (
        <div className="flex items-center">
            <a
                onClick={() => {
                    onFilterChange("all");
                }}
            >
                <div
                    className={`py-2 px-8 rounded-full ml-2 sm:ml-4
                    ${filter === "all"
                            ? " bg-indigo-100 text-indigo-700"
                            : " text-gray-600 hover:text-indigo-700 hover:bg-indigo-100"
                        }   `}
                >
                    <p>All</p>
                </div>
            </a>
            <a
                onClick={() => {
                    onFilterChange("completed");
                }}
            >
                <div
                    className={`py-2 px-8 rounded-full ml-2 sm:ml-4
                    ${filter === "completed"
                            ? " bg-indigo-100 text-indigo-700"
                            : " text-gray-600 hover:text-indigo-700 hover:bg-indigo-100"
                        }   `}
                >
                    <p>Completed</p>
                </div>
            </a>
            <a
                onClick={() => {
                    onFilterChange("pending");
                }}
            >
                <div
                    className={`py-2 px-8 rounded-full ml-2 sm:ml-4
                    ${filter === "pending"
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