import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';
import {v1} from 'uuid';


export type FilterValuesType = 'all' | 'active' | 'completed';

type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'completed'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });


    function removeTask(todolistID: string, taskID: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el => el.id !== taskID)})
    }

    function addTask(todolistID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
    }

    function changeStatus(todolistID: string, taskID: string, isDone: boolean) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);

        setTasks({...tasks, [todolistID]: tasks[todolistID].map(el => el.id === taskID ? {...el, isDone} : el)})
    }


    function changeFilter(todolistID: string, value: FilterValuesType) {
        // setFilter(value);
        setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter: value} : el))
    }

    function removeTodolist(todolistID: string) {
        setTodolists(todolists.filter(tdl => tdl.id !== todolistID))
    }

    return (
        <div className="App">
            {todolists.map(tdl => {

                let tasksForTodolist = tasks[tdl.id];
                if (tdl.filter === 'active') {
                    tasksForTodolist = tasks[tdl.id].filter(t => t.isDone === false);
                }
                if (tdl.filter === 'completed') {
                    tasksForTodolist = tasks[tdl.id].filter(t => t.isDone === true);
                }

                return <Todolist
                    key={tdl.title}
                    todolistID={tdl.id}
                    title={tdl.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={tdl.filter}
                    removeTodolist={removeTodolist}
                />
            })}

        </div>
    );
}

export default App;
