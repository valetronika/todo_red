import React from "react";
import s from "./TodoList.module.scss";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList() {
    const todoList = useSelector((state) => state.todosRedusers.todos);
    // console.log("todoList", todoList);

    return (
        <ul className={s.todos}>
            {todoList.map(
                (todo) => todo.isShow && <TodoItem key={todo.id} {...todo} />
            )}
        </ul>
    );
}
