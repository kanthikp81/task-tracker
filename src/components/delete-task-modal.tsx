import React from 'react';
import Modal from './modal';
import DeleteWarning from './delete-warning';
interface DeleteTaskModalProps {
    isOpen: boolean;
    deleteTaskId: number;
    onCancel: () => void;
    onDelete: () => void;
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
    isOpen,
    deleteTaskId,
    onCancel,
    onDelete,
    
}) => {

    return (
        <Modal
            isOpen={isOpen}
            onClose={onCancel}
        >
            <DeleteWarning
                clearAll={deleteTaskId === 0}
                onDelete={onDelete}
                onCancel={onCancel}
            />
        </Modal>
    );
};

export default DeleteTaskModal;