import React, { useEffect, useRef } from 'react';
import Modal from './modal';
import TaskInput from './task-input';

interface AddTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    addTask: (task: string) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, addTask }) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 10);
        }
    }, [isOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <TaskInput addTask={addTask} onSave={onClose} inputRef={inputRef} />
        </Modal>
    );
};

export default AddTaskModal;