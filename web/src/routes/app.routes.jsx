import { Routes, Route } from "react-router-dom";
import { Board } from "../pages/Board";

export function AppRoutes () {
    return(
        <Routes>
            <Route element={ <Board /> } path="/board" />
            <Route element={ <Board /> } path="/board/:id" />
        </Routes>
    )
}