import AuthProvider from "./context/AuthContext";
import { Route, Routes} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import HackathonList from "./components/Hackathons/HackathonList";
import React from "react";


export default function App(){
    <AuthProvider>
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                {/*<Route path='/dashboard' element={<UserDashboard />}/>*/}
                {/*<Route path='/organizer' element={<OrganizerDashboard />}/>*/}
                <Route path='/hackathons' element={<HackathonList />}/>
                {/*<Route path='/hackathon/:id' element={<HackathonDetails />}/>*/}
                {/*<Route path='/404' element={<ErrorPage code={404}/>}/>*/}
            </Routes>
    </AuthProvider>
}