import { renderHook } from '@testing-library/react-hooks';
import useLocalStorage from '../useLocalStorage';
import { Task } from '@/types/task-types';
import { act } from 'react';

describe('useLocalStorage', () => {
    const key = 'tasks';
    const initialValue: Task[] = [{ id: 1, title: 'Test Task', completed: false }];

    beforeEach(() => {
        localStorage.clear();
    });

    it('should initialize state with initial value if localStorage is empty', () => {
        const { result } = renderHook(() => useLocalStorage({ key, initialValue }));

        expect(result.current[0]).toEqual(initialValue);
    });

    it('should initialize state with value from localStorage if it exists', () => {
        const storedValue: Task[] = [{ id: 2, title: 'Stored Task', completed: true }];
        localStorage.setItem(key, JSON.stringify(storedValue));

        const { result } = renderHook(() => useLocalStorage({ key, initialValue }));

        expect(result.current[0]).toEqual(storedValue);
    });

    it('should update localStorage when setValue is called', () => {
        const { result } = renderHook(() => useLocalStorage({ key, initialValue }));
        const newValue: Task[] = [{ id: 3, title: 'New Task', completed: false }];

        act(() => {
            result.current[1](newValue);
        });

        expect(localStorage.getItem(key)).toEqual(JSON.stringify(newValue));
        expect(result.current[0]).toEqual(newValue);
    });

    it('should clear localStorage and reset state when clearValue is called', () => {
        const { result } = renderHook(() => useLocalStorage({ key, initialValue }));
        const newValue: Task[] = [{ id: 4, title: 'Another Task', completed: true }];

        act(() => {
            result.current[1](newValue);
        });

        act(() => {
            result.current[2]();
        });

        expect(localStorage.getItem(key)).toBeNull();
        expect(result.current[0]).toEqual(initialValue);
    });
});