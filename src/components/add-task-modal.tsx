import React from 'react';
import Modal from './modal';
import TaskInput from './task-input';

interface AddTaskModalProps {
    isOpen: boolean;
    setShowTaskModal: (show: boolean) => void;
    addTask: (task: string) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, setShowTaskModal, addTask }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setShowTaskModal(false)}
        >
            <TaskInput addTask={addTask} onSaved={() => setShowTaskModal(false)} />
        </Modal>
    );
};

export default AddTaskModal;