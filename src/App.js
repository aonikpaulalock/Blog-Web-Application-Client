import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Banner from './Pages/Header/Banner';
import PostHeader from './Pages/Posts/PostHeader';
import AllPosts from './Pages/Posts/AllPosts';
import Article from './Pages/Posts/Article';
import Events from './Pages/Posts/Events';
import Education from './Pages/Posts/Education';
import Job from './Pages/Posts/Job';
import Posts from './Pages/Posts/Posts';
function App() {
  return (
    <>
      <Header />
      <Banner />
      <PostHeader />
      <Routes>
        <Route path="/post" element={<Posts />}>
          <Route index element={<AllPosts />}></Route>
          <Route path="article" element={<Article />}></Route>
          <Route path="events" element={<Events />}></Route>
          <Route path="education" element={<Education />}></Route>
          <Route path="jobs" element={<Job />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
