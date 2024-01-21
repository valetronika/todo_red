import React, { useState } from "react";
import { useDispatch } from "react-redux";
import down from "../../assets/down.png";
import down_dunk from "../../assets/down_dunkel.png";
import TodoList from "../TodoList/TodoList";
import { addTodo } from "../store/todoSlice";
import s from "./InputItem.module.scss";
import Button from "../Button/Button";

export default function InputItem() {
    const dispatch = useDispatch();

    const [text, setText] = useState("");
    const [isClose, setIsClose] = useState(false);

    const toggleIsClose = () => {
        setIsClose(!isClose);
    };
    const srcImage = !isClose ? down : down_dunk;
    const addTask = () => {
        if (text.trim().length) {
            dispatch(addTodo({ text }));
        }
        setText("");
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };
    return (
        <div>
            <label className={s.input_label}>
                <img
                    src={srcImage}
                    alt="arrow"
                    onClick={toggleIsClose}
                    className={s.input_label__img}
                />
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="What needs to be done?"
                />
                <Button 
                func={()=>text.trim().length && dispatch(addTodo({ text }))}
                text={"add"} 
                classname={"add"} />
            </label>
            {!isClose && <TodoList />}
        </div>
    );
}
