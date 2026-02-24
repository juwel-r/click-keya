import { Outlet } from "react-router";
import { Button } from "./components/ui/button";
import CommonLayout from "./components/layout/CommonLayout";

export default function App() {
  return (
    <div>
      <Button>Hello</Button>
      <CommonLayout>
        <Outlet />
      </CommonLayout>
    </div>
  );
}
