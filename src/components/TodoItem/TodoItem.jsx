import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editStorage, toggleCompleted } from "../store/todoSlice";
import s from "./TodoItem.module.scss";
import approve from "../../assets/approve.png";

export default function TodoItem({ text, id, completed, isShow }) {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(completed);
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const inputRef = useRef(null);

    const classIsShow = isEditing
        ? `${s.active} ${s.todo_item}`
        : `${s.completed}  ${s.todo_item}`;

    const classText = isChecked ? s.text_completed : s.text_active;
    const handleCompleted = () => {
        dispatch(toggleCompleted({ id }));
        setIsChecked(!isChecked);
    };
    //= edit todo
    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleBlur = () => {
        setIsEditing(false);
        dispatch(editStorage({ editedText, id }));
    };

    const handleInputChange = (e) => {
        setEditedText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            setIsEditing(false);
        }
        dispatch(editStorage({ editedText, id }));
    };

    // клик вне редактора
    const saveChanges = () => {
        dispatch(editStorage({ editedText, id }));
        console.log("save ");
    };

    const handleClickOutside = (e) => {
        if (
            isEditing &&
            inputRef.current &&
            !inputRef.current.contains(e.target)
        ) {
            setIsEditing(false);
            saveChanges();
        }
    };
// при клікі ззовні 
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isEditing]);
    return (
        <>
            {isShow && (
                <li
                    className={classIsShow}
                    onDoubleClick={handleDoubleClick}
                    // onTouchStart={handleDoubleClick}
                >
                    {!isEditing ? (
                        <>
                            <label className={s.todo_item_label} htmlFor={id}>
                                {/* <div></div> */}
                                {isChecked && (
                                    <img src={approve} alt="approve" />
                                )}
                            </label>
                            <input
                                className={s.todo_item_checkbox}
                                id={id}
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCompleted}
                            />
                            <span className={classText}>{editedText}</span>
                            <span
                                className={s.todo_item_delete}
                                onClick={() => dispatch(deleteTodo({ id }))}
                            >
                                &times;
                            </span>
                        </>
                    ) : (
                        <input
                            ref={inputRef}
                            className={s.todo_item_edited}
                            type="text"
                            value={editedText}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            onKeyPress={handleKeyPress}
                        />
                    )}
                </li>
            )}
        </>
    );
}
