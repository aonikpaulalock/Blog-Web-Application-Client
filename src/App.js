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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebase.init';
import RequireAuth from './Pages/Shared/RequireAuth';
import SigninModal from './Pages/Header/SigninModal';
import AddBlogs from './Pages/Posts/AddBlogs';
import UserAded from './Pages/Posts/UserAded';
function App() {
  const [user] = useAuthState(auth)
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
        <Route path="add" element={<UserAded/>}></Route>
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
