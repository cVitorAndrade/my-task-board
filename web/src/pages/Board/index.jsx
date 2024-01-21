import {
    Container, 
    Content, 
    Header, 
    Modal, 
    NewTask,
    TaskDetails,
    TaskWrrapper,
    TaskHeader,
    TaskName,
    TaskDescription,
    TaskIcon,
    Icon,
    TaskStatus,
    Status,
    StatusIcon,
    ButtonsWrapper,
    Button
} from "./styles";

import { Task } from "../../components/Task";

import logo from '../../assets/Logo.svg'
import edit from '../../assets/Edit_duotone.svg'
import addTask from '../../assets/Add_round_duotone.svg'
import close from "../../assets/close_ring_duotone-1.svg"


import inProgress from "../../assets/Time_atack_duotone.svg"
import completed from "../../assets/Done_round_duotone.svg"
import notDo from "../../assets/close_ring_duotone.svg"

import { MdDone } from "react-icons/md";

import save from "../../assets/Done_round.svg";
import trash from "../../assets/Trash.svg";

import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Board () {    
    const [tasks, setTasks] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const param = useParams();
    const navigate = useNavigate();

    const [selectedTaskTitle, setSelectedTaskTitle] = useState("");
    const [selectedTaskDescription, setSelectedTaskDescription] = useState("");
    const [selectedTaskStatus, setSelectedTaskStatus] = useState("");
    const [selectedTaskIcon, setSelectedTaskIcon] = useState("");
    const [selectedTaskId, setSelectedTaskId] = useState("");

    const allIcons = [
        {
            name: "work",
            icon: "👨‍💻"
        },
        {
            name: "talk",
            icon: "💬"
        },
        {
            name: "cup",
            icon: "☕"
        },
        {
            name: "exercise",
            icon: "🏋️"
        },
        {
            name: "books",
            icon: "📚"
        },
        {
            name: "clock",
            icon: "⏰"
        }
    ];

    const allStatus = [
        {
            name: "In Progress",
            icon: inProgress,
            value: "in progress",
            className: "in-progress"
        },
        {
            name: "Completed",
            icon: completed,
            value: "completed",
            className: "completed"
        },
        {
            name: "Won´t Do",
            icon: notDo,
            value: "not do",
            className: "not-do"
        }
    ]

    function getTasks () {
        api.get(`/task/${param.id}`).then( ({ data }) => {
            setTasks([...data.tasks]);
            
        }).catch(error => console.log(error));
    }

    function createBoard () {
        api.post("/board").then(({ data }) => {
            navigate(`/board/${data.board_id}`);

        }).catch( error => console.log(error));
    }

    function createNewTask () {
        api.post(`/task/${param.id}`).then(() => {
            getTasks();
        }).catch(error => console.log(error));
    }

    function openModal ( id, title, status, icon_name, description ) {
        setSelectedTaskId(id);
        setSelectedTaskTitle(title);
        setSelectedTaskStatus(status)
        setSelectedTaskIcon(icon_name);
        setSelectedTaskDescription(description)

        setModalIsOpen(true);
    }

    function handleDeleteTask () {
        api.delete(`/task/${selectedTaskId}`)
        .then( () => {
            setModalIsOpen(false);
            getTasks();

        })
        .catch( error => console.log(error));
    }

    useEffect(() => {
        if ( param.id ) {
            getTasks();
        } else {
            createBoard();
        }
    }, [param]);

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
                                onClick={ () => openModal(task.id, task.title, task.status, task.icon_name, task.description) }
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

                <Modal className={ modalIsOpen ? "" : "none" }>
                    <TaskDetails>
                        <TaskHeader>
                            <h3>Task details</h3>
                            <button
                                onClick={ () => setModalIsOpen(false) }
                            >
                                <img src={close} alt="" />
                            </button>
                        </TaskHeader>

                        <TaskName>
                            <label 
                                htmlFor="task-name"
                            >
                                Task name
                            </label>

                            <input 
                                type="text" 
                                id="task-name" 
                                placeholder="Enter a short title" 
                                value={ selectedTaskTitle } 
                                onChange={ e => setSelectedTaskTitle(e.target.value) }
                            />
                        </TaskName>

                        <TaskDescription>
                            <label 
                                htmlFor="task-description"
                            >
                                Description
                            </label>

                            <textarea 
                                id="task-description" 
                                value={ selectedTaskDescription } 
                                placeholder="Enter a short description"
                                onChange={ e => setSelectedTaskDescription(e.target.value) }
                            >

                            </textarea>
                        </TaskDescription>

                        <TaskIcon>
                            <label>Icon</label>

                            <div>
                                {
                                    allIcons && 
                                    allIcons.map( icon => (
                                        <Icon
                                            key={icon.name}
                                            className={ selectedTaskIcon === icon.name ? "selected" : "" }
                                            onClick={ () => setSelectedTaskIcon(icon.name) }
                                        >
                                            { icon.icon }
                                        </Icon>
                                    ))
                                }
                            </div>
                        </TaskIcon>

                        <TaskStatus>
                            <label>Status</label>
                            <div>
                                {
                                    allStatus && 
                                    allStatus.map( status => (
                                        <Status 
                                            key={status.name}
                                            className={ selectedTaskStatus === status.value ? "selected" : "" }
                                            onClick={ () => setSelectedTaskStatus(status.value) }
                                        >
                                            <div>
                                                <StatusIcon 
                                                    className={ status.className }
                                                >
                                                    <div>
                                                        <img src={ status.icon } />
                                                    </div>
                                                </StatusIcon>
                                                
                                                <h3>{ status.name }</h3>
                                            </div>

                                            {
                                                selectedTaskStatus === status.value &&
                                                    <MdDone 
                                                        size={18}
                                                    />
                                            }

                                        </Status>
                                    ))
                                }
                            </div>
                        </TaskStatus>

                        <ButtonsWrapper>
                            <Button
                                onClick={ handleDeleteTask }
                            >
                                Delete <img src={trash} alt="" />
                            </Button>

                            <Button>
                                Save <img src={save} alt="" />
                            </Button>
                        </ButtonsWrapper>
                        
                    </TaskDetails>
                </Modal>
            </Content>
        </Container>
    )
}


