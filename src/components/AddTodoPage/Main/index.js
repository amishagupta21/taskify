
import React, { useState } from 'react'
import styles from "./index.module.css"
import closeicon from "../../../assests/icons/closeicon.svg"
import notesIcon from "../../../assests/icons/notes.svg"
import eventIcon from "../../../assests/icons/calender.svg"
import rewardsIcon from "../../../assests/icons/rewards.svg"
import dateIcon from "../../../assests/icons/date.svg"
import timeIcon from "../../../assests/icons/time.svg"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTaskAction } from '../../../redux/actions/todoAction'

const generateId = () => {
    return Math.ceil(Math.random() * 1000000).toString()
}

const categories = [
    {
        id: generateId(),
        icon: notesIcon,
        name: "study"
    },
    {
        id: generateId(),
        icon: rewardsIcon,
        name: "reward"
    },
    {
        id: generateId(),
        icon: eventIcon,
        name: "event"
    }
]
const Main = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [task, setTask] = useState("")
    const taskHandler = (e) => setTask(e.target.value);

    const [date, setDate] = useState("")
    const dateHandler = (e) => setDate(e.target.value);

    const [time, setTime] = useState("")
    const timeHandler = (e) => setTime(e.target.value);

    const [note, setNote] = useState("")
    const notesHandler = (e) => setNote(e.target.value);
 
    const [selectedCategory, setSelectedCategory] = useState("event")
    const selectCategory = (categoryName) => setSelectedCategory(categoryName);
   
    const addTask = () => {
        const obj = {
            id: generateId(),
            task,
            date,
            time,
            note,
            isCompleted: false,
            category: selectedCategory
        }
        dispatch(addTaskAction(obj));
        setNote("")
        setTime("")
        setDate("")
        setTask("")
        navigate("/")
    }

    return (
        <div className={styles.container}>
            {/* Header section */}
            <div className={styles.header}>
                <Link to="/">
                    <img src={closeicon} alt="close_icon" width={48} height={48} />
                </Link>
                <p>Add New Task</p>
            </div>

            {/* Todo creation */}

            <div className={styles.todosField}>
                <div className={styles.taskField}>
                    <p>Task Title</p>
                    <input placeholder='Task Title' value={task} onChange={taskHandler} />
                </div>

                <div className={styles.categoryField}>
                    <p>Category</p>
                    <div className={styles.icon}>
                        {categories.map(category => {
                            return <img key={category.id} onClick={() => selectCategory(category.name)} src={category.icon} height={48} width={48} alt={category.name} />
                        })}
                    </div>
                </div>

                <div className={styles.dateTimeField}>

                    <div className={styles.fieldContainer}>
                        <p>Date</p>
                        <div className={styles.inputField}>
                            <input type="text" placeholder='Date' value={date} onChange={dateHandler} />
                            <img src={dateIcon} height={20} width={20} alt="date_icon" />
                        </div>
                    </div>

                    <div className={styles.fieldContainer}>
                        <p>Time</p>
                        <div className={styles.inputField}>
                            <input type="text" placeholder='Time' value={time} onChange={timeHandler} />
                            <img src={timeIcon} height={20} width={20} alt="time_icon" />
                        </div>
                    </div>
                </div>

                <div className={styles.notesField}>
                    <p>Notes</p>
                    <textarea placeholder='Notes' value={note} onChange={notesHandler} />
                </div>

                {/* save task section */}
                <div className={styles.buttonContainer}>
                    <button className={styles.saveField} onClick={addTask}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main
