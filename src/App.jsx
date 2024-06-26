import Layout from "./layout";
import { Route, Routes } from "react-router-dom";
import { Users, User } from "./pages/index";
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Layout>
  );
}
