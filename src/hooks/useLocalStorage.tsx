import { useState } from "react"
import { Task } from "@/types/task-types"

interface LocalStorageHookProps {
  key: string,
  initialValue:Task[]
}
const useLocalStorage = ({key, initialValue}:LocalStorageHookProps) => {
  const [state, setState] = useState(() => {
    // Initialize the state
    try {
      const value = window.localStorage.getItem(key)
      // Check if the local storage already has any values,
      // otherwise initialize it with the passed initialValue
      return value ? JSON.parse(value) : initialValue
    } catch (error) {
      console.log(error)
    }
  })

  const setValue = (value:Task[]) => {
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
      setState(value)
    } catch (error) {
      console.log(error)
    }
  }

  const clearValue = () => {
    try {
      window.localStorage.removeItem(key)
      setState(initialValue)
    } catch (error) {
      console.log(error)
    }
  }
  return [state, setValue, clearValue];
}

export default useLocalStorage