import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Admin/Timeline";
import Youtube from "./components/Admin/Youtube";
import Project from "./components/Admin/Project";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            element={user ? (
              <Home
                youtubes={user.youtube}
                timelines={user.timeline}
                skills={user.skills}
              />
            ) : (
              <div>Loading...</div>
            )}
          />

          <Route
            path="/about"
            element={user && user.about ? (
              <About about={user.about} />
            ) : (
              <div>About information not available</div>
            )}
          />

          <Route
            path="/projects"
            element={user && user.projects ? (
              <Projects projects={user.projects} />
            ) : (
              <div>No projects available</div>
            )}
          />

          <Route path="/contact" element={<Contact />} />
          <Route
            path="/account"
            element={isAuthenticated ? <AdminPanel /> : <Login />}
          />
          <Route
            path="/admin/timeline"
            element={isAuthenticated ? <Timeline /> : <Login />}
          />
          <Route
            path="/admin/youtube"
            element={isAuthenticated ? <Youtube /> : <Login />}
          />

          <Route
            path="/admin/project"
            element={isAuthenticated ? <Project /> : <Login />}
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
