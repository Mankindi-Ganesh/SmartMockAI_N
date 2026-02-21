import  {Footer} from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import AuthHanlder from "@/components/handlers/auth-handler";

export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}
      <Header />
      <AuthHanlder/>
     


      <Outlet />

      <Footer />
    </div>
  );
}
