import React from 'react'
import styles from "./index.module.css"
import Todo from '../Todo'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Main = () => {
  const { tasks } = useSelector((state) => state.taskReducer);

  return (
    <div className={styles.conatiner}>

      {/* Header section */}

      <div className={styles.header}>
        <p className={styles.dateField}>{moment().format('MMMM Do ,YYYY')}</p>
        <h1>Taskify App</h1>
      </div>

      {/* task section */}

      <div className={styles.taskSection}>
        <div className={styles.taskList}>
          {tasks.filter(task => task.isCompleted === false).map(task => {
            return <Todo key={task.id} todo={task} />
          })}
        </div>

        <h1>Completed</h1>

        <div className={styles.completedTask}>
          {tasks.filter(task => task.isCompleted === true).map(task => {
            return <Todo key={task.id} todo={task} />
          })}
        </div>
      </div>

      {/* submit section */}

      <Link to="/addTodo" className={styles.buttonContainer}>
        <button className={styles.addField}>
          Add New Task
        </button>
      </Link>

    </div>
  )
}

export default Main
