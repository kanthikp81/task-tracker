import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../task-list";
import { Task } from "@/types/task-types";

const tasks: Task[] = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
];

const mockClearTasks = jest.fn();
const mockAddTask = jest.fn();
const mockUpdateTasks = jest.fn();

describe("TaskList Component", () => {
    beforeEach(() => {
        render(
            <TaskList
                tasks={tasks}
                clearTasks={mockClearTasks}
                addTask={mockAddTask}
                updateTasks={mockUpdateTasks}
            />
        );
    });

    it("renders task list", () => {
        expect(screen.getByText("Tasks")).toBeInTheDocument();
        expect(screen.getByText("Task 1")).toBeInTheDocument();
        expect(screen.getByText("Task 2")).toBeInTheDocument();
    });

    it("filters tasks by 'all'", () => {
        fireEvent.click(screen.getByText("All"));
        expect(screen.getByText("Task 1")).toBeInTheDocument();
        expect(screen.getByText("Task 2")).toBeInTheDocument();
    });

    it("filters tasks by 'completed'", () => {
        fireEvent.click(screen.getByText("Completed"));
        expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
        expect(screen.getByText("Task 2")).toBeInTheDocument();
    });

    it("filters tasks by 'pending'", () => {
        fireEvent.click(screen.getByText("Pending"));
        expect(screen.getByText("Task 1")).toBeInTheDocument();
        expect(screen.queryByText("Task 2")).not.toBeInTheDocument();
    });

    it("toggles task completion", () => {
        const checkbox = screen.getAllByRole("checkbox")[0];
        fireEvent.click(checkbox);
        expect(mockUpdateTasks).toHaveBeenCalledWith([
            { id: 1, title: "Task 1", completed: true },
            { id: 2, title: "Task 2", completed: true },
        ]);
    });

    it("opens add task modal", () => {
        fireEvent.click(screen.getByText("Add Task"));
        expect(screen.getByText("Add a New Task")).toBeInTheDocument();
    });

    it("clears all tasks", () => {
        fireEvent.click(screen.getByText("Clear All"));
        expect(screen.getByText("Are you sure you want to delete all the tasks?")).toBeInTheDocument();
    });

    it("opens delete warning modal", () => {
        const deleteButton = screen.getAllByRole("button")[2];
        fireEvent.click(deleteButton);
        expect(screen.getByText((content) => content.startsWith("Are you sure you want to delete"))).toBeInTheDocument();
    });

   
});