import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApiCall2 from "./ApiCall2";
// import Form from "./Form";
// import Form2 from "./Form2";
import Form5 from "./Form5";
// import Todo from "./Todo";
import Todo6 from "./Todo6";
import Corousel from "./Image_corousel/Corousel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Corousel/>} />
          <Route path="/api" element={<ApiCall2 />} />
          <Route path="/form" element={<Form5 />} />
          <Route path="/todo" element={<Todo6 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
