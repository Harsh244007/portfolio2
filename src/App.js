import './App.css';
import React,{Suspense,useContext} from "react"
import { MainProvider } from './contexts/MainContext';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/navbar';
const Home=React.lazy(()=>import("./components/home"))
const Feedback=React.lazy(()=>import("./components/feedbackform"))
const Blogs=React.lazy(()=>import("./components/blogs"))
const Projects=React.lazy(()=>import("./components/projects"))
const Next=React.lazy(()=>import("./components/blogs/next"))
function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
<Route path="/" element={
  <Suspense fallback={<h1>Home Page is loading</h1>}>
    <Home/>
  </Suspense>
}/>
<Route path="/blogs/:id" element={
  <Suspense fallback={<h1>Page is loading</h1>}>
    <Next/>
  </Suspense>
}/>
<Route path="*" element={
    <h1>Error page kindly go to home something is wrong</h1>
}/>
<Route path="/projects" element={
  <Suspense fallback={<h1>Project Page is loading</h1>}>
    <Projects/>
  </Suspense>
}/>
<Route path="/blogs" element={
  <Suspense fallback={<h1>Blog Page is loading</h1>}>
    <Blogs/>
  </Suspense>
}/>
<Route path="/feedback" element={
  <Suspense fallback={<h1>Feedback page is loading</h1>}>
    <Feedback/>
  </Suspense>
}/>

    </Routes>
    </div>
  );
}

export default App;
