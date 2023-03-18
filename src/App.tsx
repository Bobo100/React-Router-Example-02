// 傳統路由配置方式
// import './css/App.scss';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// import { Home } from './pages/Home';
// import { NotFoundPage } from './pages/Error';

// function App() {
//   return (
//     <div className="App">
//       <Router basename="/">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="*" element={<NotFoundPage />}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

// 動態路由配置方式
import './css/App.scss';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { getRoutes } from './routes';

function App() {
  return (
    <div className='App'>
      <Router basename="/">
        <Routes>
          {getRoutes()}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
