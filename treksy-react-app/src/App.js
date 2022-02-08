import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRegister from "./pages/user/UserRegister";
import UserLogin from "./pages/user/UserLogin";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/login' element={<UserLogin/>} />
                    <Route exact path='/register' element={<UserRegister/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
