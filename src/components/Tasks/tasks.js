import React, { useState } from 'react'

import styles from './tasks.module.css'

import TaskFoundation from '../TaskFoundation/taskFoundation.js'

const Tasks = ({ title, dataTasks }) => {
    
    const [tasks, setTasks] = useState(dataTasks)
    
    return (
        <div className={`${styles.tasksBox} ${title === 'pros' ? styles.rightBorder : ''}`}>
            <div className={styles.tasksBoxTitle}>{title}</div>
            <ol className={styles.tasks}>
                {tasks.map((task, taskIndex) => {
                    return <li key={task._id} className={styles.task}>
                        <TaskFoundation task={task} taskIndex={taskIndex} tasks={tasks} setTasks={setTasks} />
                    </li>
                })}
            </ol>
        </div>
    )
}

export default Tasks