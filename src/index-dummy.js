import React from "react"

export default function Form() {
    const [todoText, setTodoText] = React.useState([])

    console.log(todoText)

    function handleTodoText(event) {
        const {name, value, type, checked} = event.target
        setTodoText(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function addList(event) {
        const {name, value, type, checked} = event.target
        setTodoText(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    return (
        <form>
            <label>
                Todo
            </label>
            <input type="text"
                name="name"
                placeholder="Todo text here"
                onChange={handleTodoText} />

            <button type="button"
            onClick={addList}> Add List </button>

            <br></br>
            <br></br>
            <input
                type="checkbox"
                id="isDone"
                checked={FormData.isDone}
                onChange={handleTodoText}
                name="isDone"
            />
            <label htmlFor="isDone"> Todo List 1</label>
           

            
        </form>
    );
}