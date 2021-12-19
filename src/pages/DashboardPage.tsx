import Desktop from "../components/ui/Desktop";
import Navbar from "../components/ui/Navbar";

const DashboardPage = () => {
  return (
    <div className="flex flex-row">
      <Navbar />
      <Desktop />
    </div>
  );
};

export default DashboardPage;
