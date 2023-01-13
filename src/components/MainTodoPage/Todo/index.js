import React, { useState } from 'react'
import styles from "./index.module.css"
import notes from "../../../assests/icons/notes.svg"
import reward from "../../../assests/icons/rewards.svg"
import calender from "../../../assests/icons/calender.svg"
import deleteIcon from "../../../assests/icons/delete.svg"
import { useDispatch } from 'react-redux'
import { deleteTaskAction, editTaskAction, toggleTaskAction } from '../../../redux/actions/todoAction'

function Todo(props) {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(props.todo.isCompleted);
    const [updatedTaskField, setUpdatedTaskField] = useState(props.todo.task);
    const updateHandler = (e) => {
        setUpdatedTaskField(e.target.value)
    }

    const [isInputField, SetIsInputField] = useState(false);
    const toggleField = () => {
        SetIsInputField(!isInputField)
    }

    const handler = (e) => {
        dispatch(toggleTaskAction(props.todo.id))
        setChecked(!checked)
    }

    const onBlur = () => {
        const temObj = {
            id: props.todo.id,
            newValue: updatedTaskField
        }
        dispatch(editTaskAction(temObj))
    }
    
    const deleteTask=()=>{
        // console.log(props.todo.id)
        dispatch(deleteTaskAction(props.todo.id))
    }

    let icon = notes
    if (props.todo.category === "study") {
        icon = notes;
    }

    if (props.todo.category === "event") {
        icon = calender
    }

    if (props.todo.category === "reward") {
        icon = reward
    }

    return (
        <div className={styles.completedCategory}>
            <div style={{ opacity: checked ? "0.6" : "1" }} className={styles.category}>
                <img src={icon} height={48} width={48} alt="icon " />
                <div className={styles.text}>
                    {isInputField ? <input value={updatedTaskField} onChange={updateHandler} autoFocus className={styles.updatedTaskInputField} type="text" onBlur={onBlur} /> : <p style={{ textDecoration: checked ? "line-through" : "none" }} onClick={toggleField}>{props.todo.task}</p>}
                    <p style={{ textDecoration: checked ? "line-through" : "none" }}>{props.todo.time}</p>
                </div>
            </div>
            <input className={styles.checkBox} type="checkbox" checked={checked} value={checked} onChange={handler} />
            <img src={deleteIcon} height={26} width={26} onClick={deleteTask} alt="deleteIcon"/>
        </div>
    )
}

export default Todo;
