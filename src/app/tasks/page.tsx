"use client";
import TaskList from '@/components/task-list';
import  useLocalStorage  from '@/hooks/useLocalStorage';

export default function TasksPage() {
  const [value, setValue, clearValue] = useLocalStorage({ key: 'tasks', initialValue: [] });

  const addTask = (taskText:string) => {
    const newTaskObj = { id: Date.now(), title: taskText, completed: false };
    setValue([...value, newTaskObj]);
  };

  const clearTasks = () => {
    clearValue();
  };

return (
    <div>
        <TaskList tasks={value} addTask={addTask} clearTasks={clearTasks}  />
    </div>
);
}