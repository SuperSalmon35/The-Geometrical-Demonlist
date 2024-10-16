import List from './pages/List.js';
import ILL from './pages/cl.js';
import Leaderboard from './pages/Leaderboard.js';
import ILL_Leaderboard from './pages/cl_Leaderboard.js';
import Roulette from './pages/Roulette.js';

export default [
    { path: '/', component: List },
    { path: '/ill', component: ILL },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/illleaderboard', component: ILL_Leaderboard },
    { path: '/roulette', component: Roulette },
];
