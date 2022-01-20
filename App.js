// src/App.js
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';
import Quiz9 from './pages/Quiz9';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/Quiz_9" element={<Quiz9 />} />
        </Routes>
    );
}

export default App;