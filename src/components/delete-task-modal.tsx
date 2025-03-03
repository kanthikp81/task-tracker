import React from 'react';
import Modal from './modal';
import DeleteWarning from './delete-warning';
import { Task } from '@/types/task-types';

interface DeleteTaskModalProps {
    isOpen: boolean;
    setShowDeleteModal: (show: boolean) => void;
    clearTasks: () => void;
    updateTasks: (tasks: Task[]) => void;
    taskList: Task[];
    deleteTaskId: number;
    setDeleteTaskId: (id: number) => void;
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
    isOpen,
    setShowDeleteModal,
    deleteTaskId,
    clearTasks,
    updateTasks,
    taskList,
    setDeleteTaskId,
}) => {
    const handleDelete = () => {
        if (deleteTaskId === 0) {
            clearTasks();
        } else {
            updateTasks(taskList.filter((task) => task.id !== deleteTaskId));
            setDeleteTaskId(0);
        }
        setShowDeleteModal(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setShowDeleteModal(false)}
        >
            <DeleteWarning
                clearAll={deleteTaskId === 0}
                onDelete={handleDelete}
                onCancel={() => setShowDeleteModal(false)}
            />
        </Modal>
    );
};

export default DeleteTaskModal;