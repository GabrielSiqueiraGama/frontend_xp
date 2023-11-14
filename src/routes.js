import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Avaliacoes } from "./pages/Avaliacoes";

export const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/reviews/:id" element={<Avaliacoes />} />

            </Routes>
        </Router>
    );
}