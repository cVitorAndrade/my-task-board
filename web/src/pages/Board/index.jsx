import { Container, Content, Header, Modal, NewTask, TaskWrrapper } from "./styles";

import { Task } from "../../components/Task";

import logo from '../../assets/Logo.svg'
import edit from '../../assets/Edit_duotone.svg'
import addTask from '../../assets/Add_round_duotone.svg'

import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Board () {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks();

    }, [])

    function getTasks () {
        api.get(`/task/2`).then( ({ data }) => {
            setTasks([...data.tasks]);
            
        }).catch(error => console.log(error));

    }

    function createNewTask () {
        api.post("/task/2").then(() => {
            getTasks();
        }).catch(error => console.log(error));
    }

    return(
        <Container>
            <Content>
                <Header>
                    <img src={logo} alt="" />
                    <div className="title">
                        <h1>
                            My Task Board
                            <img src={edit} alt="" />
                        </h1>
                        <p>Tasks to keep organised</p>
                    </div>
                </Header>

                <TaskWrrapper>
                    {
                        tasks && 
                        tasks.map( task => (
                            <Task 
                                key={task.id}
                                title={task.title}
                                status={task.status}
                                icon_name={task.icon_name}
                                description={task.description}
                            />
                        ))
                    }
                </TaskWrrapper>

                <NewTask
                    onClick={createNewTask}
                >
                    <div className="icon">
                        <img src={addTask} alt="" />
                    </div>
                    Add new task
                </NewTask>
            </Content>
        </Container>
    )
}


