import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Login from "./Components/login/Login";
import Signup from "./Components/login/Signup";
import Dashboard from "./Components/dashboard/Dashboard";
import DeptForm from "./Components/dashboard/Department/DeptForm";
import DeptCard from "./Components/dashboard/Department/DeptCard";
import DeptUpdate from "./Components/dashboard/Department/DeptUpdate";
import EmpForm from "./Components/dashboard/Employee/EmpForm";
import EmpCard from "./Components/dashboard/Employee/EmpCard";
import EmpUpdate from "./Components/dashboard/Employee/EmpUpdate";
import DeptHeadForm from "./Components/dashboard/DeptHead/DeptHeadForm";
import DeptHeadCard from "./Components/dashboard/DeptHead/DeptHeadCard";
import DeptHeadUpdate from "./Components/dashboard/DeptHead/DeptHeadUpdate";
import Sidebar from "./Components/dashboard/Sidebar";
import SingleDept from "./Components/dashboard/Department/SingleDept";
import SingleDeptHead from "./Components/dashboard/DeptHead/SingleDeptHead";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/department" element={<DeptForm />} />
          <Route path="/dashboard/deptCard" element={<DeptCard />} />
          <Route path="/dashboard/deptUpdate/:id" element={<DeptUpdate />} />
          <Route path="/dashboard/employee" element={<EmpForm />} />
          <Route path="/dashboard/empCard" element={<EmpCard />} />
          <Route path="/dashboard/empUpdate/:id" element={<EmpUpdate />} />
          <Route path="/dashboard/deptHead" element={<DeptHeadForm />} />
          <Route path="/dashboard/deptHeadCard" element={<DeptHeadCard />} />
          <Route
            path="/dashboard/deptHeadUpdate/:id"
            element={<DeptHeadUpdate />}
          />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/dashboard/singleDept/:id" element={<SingleDept/>} />
          <Route path="/dashboard/singleDeptHead/:id" element={<SingleDeptHead/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
