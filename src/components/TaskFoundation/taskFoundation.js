import React, { useState } from 'react'

import styles from './taskFoundation.module.css'

const TaskFoundation = ({ task, taskIndex, tasks, setTasks }) => {

    const [isChangeTask, setIsChangeTask] = useState(false)

    const handleChange = event => {
        const titleValue = event.target.value

        if (!titleValue) {
            setTasks(prevState => prevState.filter(prevTask => prevTask._id !== task._id))
        }

        if (taskIndex === tasks.length - 1) {
            setTasks(prevState => {
                return [...prevState.map(prevTask => prevTask._id === task._id ? { ...prevTask, title: titleValue } : prevTask), { _id: idGenerator(), title: '' }]
            })
        } else {
            setTasks(prevState => {
                return prevState.map(prevTask => prevTask._id === task._id ? { ...prevTask, title: titleValue } : prevTask)
            })
        }
    }

    return (
        <>
            {
                isChangeTask
                    ? <input
                        className={styles.changeInput}
                        defaultValue={task.title}
                        onChange={handleChange}
                        onBlur={() => setIsChangeTask(prevState => prevState = false)}
                        autoFocus
                    />
                    : <div
                        className={styles.taskText}
                        onClick={() => setIsChangeTask(prevState => prevState = true)}
                    >
                        {task.title}
                    </div>
            }
        </>
    )
}

const idGenerator = () => Math.random().toString(36).substring(2) + '_' + Math.random().toString(36).substring(2)

export default TaskFoundation

