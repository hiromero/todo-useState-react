import React from "react"

export default function Form() {
    const [todoText, setTodoText] = React.useState([])


    const addList=()=>{
        const abc=[...todoText,[]]
        setTodoText(abc)
    }

    const handleChange=(onChangeValue, i)=>{
        const inputdata = [...todoText]
        inputdata[i]=onChangeValue.target.value
        setTodoText(inputdata)
    }
    const handleDelete=(i)=>{
        const deleteVal=[...todoText]
        deleteVal.splice(i,1)
        setTodoText(deleteVal)
    }
    console.log(todoText, "data")
    return (
        <>
            <label>
                Todo
            </label>
            <br></br>


            <button onClick={()=>addList()}> Add Todo </button>
            {todoText.map((data,i)=>{
                return(
                    <div>
                        <input value={data} onChange={e=>handleChange(e,i)} />
                        <button onClick={()=>handleDelete(i)}>Delete Todo</button>
                    </div>
                )
            })}
    
            
        </>
    );
}