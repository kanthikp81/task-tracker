"use client";
import TaskHome from "@/components/task-home";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Task } from "@/types/task-types";

export default function TasksPage() {
  const [value, setValue, clearValue] = useLocalStorage({
    key: "tasks",
    initialValue: [],
  });

  const addTask = (taskText: string) => {
    const newTaskObj = { id: Date.now(), title: taskText, completed: false };
    setValue([...value, newTaskObj]);
  };

  const clearTasks = () => {
    clearValue();
  };

  const updateTasks = (tasks: Task[]) => {
    setValue(tasks);
  };

  return (
    <div>
      <TaskHome
        tasks={value}
        addTask={addTask}
        clearTasks={clearTasks}
        updateTasks={updateTasks}
      />
    </div>
  );
}
