import { Container, Content, Header } from "./styles";

import logo from '../../assets/Logo.svg'
import edit from '../../assets/Edit_duotone.svg'

export function Board () {
    return(
        <Container>
            <Content>
                <Header>
                    <img src={logo} alt="" />
                    <div className="title">
                        <h1>My Task Board</h1>
                        <p>Tasks to keep organised</p>
                    </div>
                    <img src={edit} alt="" />
                </Header>
            </Content>
        </Container>
    )
}