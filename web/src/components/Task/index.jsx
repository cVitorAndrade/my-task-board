import { Container } from "./styles";

import inProgress from "../../assets/Time_atack_duotone.svg"
import completed from "../../assets/Done_round_duotone.svg"
import notDo from "../../assets/close_ring_duotone.svg"

export function Task ({ title, description, status, icon_name}) {
    const allIcons = {
        "cup": "☕",
        "clock": "⏰",
        "exercise": "🏋️",
        "books": "📚",
        "talk": "💬",
        "work": "👨‍💻"
    };

    const allStatus = {
        "in progress": {
            icon: inProgress,
            className: "in-progress" 
        },

        "completed": {
            icon: completed,
            className: "completed"
        },

        "not do": {
            icon: notDo,
            className: "not-do"
        }
    };

    return(
        <Container className={ status ? allStatus[status].className : "" }>
            <div>
                <div className="icon">
                    { allIcons[icon_name] }
                </div>

                <div className="text">
                    <h2>{ title } </h2>
                    <p>{ description }</p>
                </div>
            </div>

            <div className="status">
                {
                    status &&
                    <img src={ allStatus[status].icon } alt="" />
                }
            </div>
        </Container>
    )
}