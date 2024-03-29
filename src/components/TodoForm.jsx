import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({ todo, completed: false })
        setTodo("")
    }

    return (
        <form className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 pt-2 bg-green-500 text-sky-950 shrink-0">
                <lord-icon
                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                    trigger="click"
                    style={{ width: 30, height: 30 }}>
                </lord-icon>
            </button>
        </form>
    );
}

export default TodoForm;
