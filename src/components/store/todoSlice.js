import { createSlice } from "@reduxjs/toolkit";


const saveTodoToLocalStorage = (state)=>{
    localStorage.setItem('TodosList', JSON.stringify(state))

}
const localDate = JSON.parse(localStorage.getItem('TodosList'))?.todos ?? false;
console.log('localDate',localDate);
const initialState = {
todos: localDate !== false ? localDate: [
    {
        id: 1,
        text: "test 1",
        completed: false,
        isShow: true,
    },
    {
        id: 2,
        text: "test 2",
        completed: true,
        isShow: true,
    },
],

}
// console.log('initialState',initialState);
const todoSlice = createSlice({
    name: "todo",
    initialState:initialState, //{todos:[{},{},{}]}

    reducers: {
        addTodo(state, action) {
            console.log('typeof state.todos,',typeof state.todos);
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
                isShow: true,
            });
            saveTodoToLocalStorage(state)
        },
        deleteTodo(state, action) {
            state.todos = state.todos.todos.filter(
                (todo) => todo.id !== action.payload.id
            );
            saveTodoToLocalStorage(state)

        },
        showAll(state,action){
            state.todos = state.todos.map(todo => ({
                ...todo,
                isShow: true
            }))
        },
        toggleCompleted(state, action) {
            const toggledTodo = state.todos.find(
                (todo) => todo.id === action.payload.id
            );
            toggledTodo.completed = !toggledTodo.completed;
            saveTodoToLocalStorage(state)
            
        },
        showCompleted(state, action) {
            state.todos = state.todos.map((todo) => ({
                ...todo,
                isShow: todo.completed,
            }));
        },
        showActive(state, action) {
            state.todos = state.todos.map((todo) => ({
                ...todo,
                isShow: !todo.completed,
            }));
        },
        clearAllCompleted(state, action) {
            state.todos = state.todos.filter((todo) => !todo.completed);
            saveTodoToLocalStorage(state)

        },
        editStorage(state,action){

            const editedTodo = state.todos.find(todo => todo.id === action.payload.id);
            editedTodo.text = action.payload.editedText;
            saveTodoToLocalStorage(state)

        },

    },
});

export const {
    addTodo,
    deleteTodo,
    toggleCompleted,
    showCompleted,
    showActive,
    clearAllCompleted,
    showAll,
    editStorage,
} = todoSlice.actions;
export default todoSlice.reducer;
