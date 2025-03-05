import React from "react";

interface DeleteWarningProps {
  onDelete: () => void;
  onCancel: () => void;
  clearAll?: boolean
}

const DeleteWarning: React.FC<DeleteWarningProps> = ({
  onDelete,
  onCancel,
  clearAll
}) => {
  return (
    <div className="flex flex-col">
      <p className="m-2  items-center">
        {clearAll ? "Are you sure you want to delete all the tasks?"
          : "Are you sure you want to delete the task?"}
      </p>
      <div className="flex flex-row justify-end mt-2">
        <button
          onClick={onCancel}
          className="m-2 sm:mt-0  px-3 py-2 bg-gray-700 hover:bg-gray-500 focus:outline-none rounded text-white"
        >
          Cancel
        </button>

        <button
          onClick={onDelete}
          className="m-2 sm:mt-0  px-3 py-2 bg-red-700 hover:bg-red-500 focus:outline-none rounded text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteWarning;
