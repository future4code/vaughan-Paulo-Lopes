import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MegaSena from "../pages/MegaSena/MegaSena"
import Quina from "../pages/Quina/Quina"
import LotoFacil from "../pages/LotoFacil/LotoFacil"
import Lotomania from "../pages/Lotomania/Lotomania";
import Timemania from "../pages/Timemania/Timemania"
import DiaDeSorte from "../pages/DiaDeSorte/DiaDeSorte";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<MegaSena/>} />

                <Route path="/Quina" element={<Quina/>} />

                <Route path="/Lotofacil" element={<LotoFacil/>} />

                <Route path="/Lotomania" element={<Lotomania/>} />

                <Route path="/Timemania" element={<Timemania/>} />

                <Route path="/diadesorte" element={<DiaDeSorte/>} />

            </Routes>
        </BrowserRouter>
    )
}