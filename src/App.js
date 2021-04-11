import React from 'react'

import styles from './App.module.css'

import Tasks from './components/Tasks/tasks.js'

const prosTasks = [
    { _id: 1, title: 'it is really tasty' },
    { _id: 2, title: 'it is really tasty' },
    { _id: 3, title: '' }
]
const consTasks = [
    { _id: 4, title: 'Makes me fat' },
    { _id: 5, title: 'To expensive' },
    { _id: 6, title: '' }
]

const App = () => {

    return (
        <div className={styles.container} >
            <div className={styles.tasksWrapper}>
                <div className={styles.taskWrapperTitle}>Should I eat at McDonalds?</div>
                <div className={styles.tasks}>
                    <Tasks
                        title='pros'
                        dataTasks={prosTasks}
                    />
                    <Tasks
                        title='cons'
                        dataTasks={consTasks}
                    />
                </div>
            </div>
        </div>
    )
}

export default App