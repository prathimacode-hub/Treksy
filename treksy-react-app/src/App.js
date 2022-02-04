import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRegister from "./pages/user/UserRegister";
import UserLogin from "./pages/user/UserLogin";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/login' element={<UserLogin/>} />
                    <Route exact path='/register' element={<UserRegister/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
