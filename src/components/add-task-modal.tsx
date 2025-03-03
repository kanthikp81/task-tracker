import React, { useEffect, useRef } from 'react';
import Modal from './modal';
import TaskInput from './task-input';

interface AddTaskModalProps {
    isOpen: boolean;
    setShowTaskModal: (show: boolean) => void;
    addTask: (task: string) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, setShowTaskModal, addTask }) => {
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
            onClose={() => setShowTaskModal(false)}
        >
            <TaskInput addTask={addTask} onSaved={() => setShowTaskModal(false)} inputRef={inputRef} />
        </Modal>
    );
};

export default AddTaskModal;