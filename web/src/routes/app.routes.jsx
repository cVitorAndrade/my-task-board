import { Routes, Route } from "react-router-dom";
import { Board } from "../pages/Board";
import { NotFound } from "../pages/NotFound";

export function AppRoutes () {
    return(
        <Routes>
            <Route element={ <Board /> } path="/board" />
            <Route element={ <Board /> } path="/board/:id" />
            <Route element={ <Board /> } path="/" />
            <Route element={ <NotFound /> } path="not-found" />
        </Routes>
    )
}