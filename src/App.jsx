import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiCall2 from "./ApiCall2";
// import Form from "./Form";
// import Form2 from "./Form2";
import Form5 from "./Form5";
// import Todo from "./Todo";
import Todo6 from "./Todo6";
import Corousel from "./Image_corousel/Corousel";
import Query from "./FetchingDataFromReactQueay/Query";
import Parent from "./Lifting_the_state_up/Parent";
import Child from "./Lifting_the_state_up/Child";
import Login from "./Components/Login";
import ParentComponent from "./liftingStateUp/parent";
import ChildComponent from "./liftingStateUp/Child";
import ContributionGraph from "./GitHub_Contribution_graph/Graph";
import Index from "./Hooks/Index";
import ApiCall3 from "./ApiCall3";
import Todolatest from "./Todolatest";
import CustomHookTesting from "./CustomHookTesting";
import Gun from "./Gun";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Corousel/>} />
          <Route path="/api" element={<ApiCall2 />} />
          <Route path="/api2" element={<ApiCall3 />} />
          <Route path="/form" element={<Form5 />} />
          <Route path="/todo" element={<Todo6 />} />
          <Route path="/query" element={<Query />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/child" element={<Child />} />
          <Route path="/login" element={<Login />} />
          <Route path="/p" element={<ParentComponent />} />
          <Route path="/c" element={<ChildComponent />} />
          <Route path="/g" element={<ContributionGraph />} />
          <Route path="/hook" element={<Index />} />
          <Route path="/tl" element={<Todolatest />} />
          <Route path="/cht" element={<CustomHookTesting />} />
          <Route path="/gun" element={<Gun />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
