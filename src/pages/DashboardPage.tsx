import Desktop from "../components/ui/Desktop";
import Navbar from "../components/ui/Navbar";
import NavbarProvider from "../providers/navbar/NavbarProvider";

const DashboardPage = () => {
  return (
    <div className="flex flex-row relative min-h-screen">
      <NavbarProvider>
        <Navbar />
        <Desktop />
      </NavbarProvider>
    </div>
  );
};

export default DashboardPage;
