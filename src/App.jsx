import { BrowserRouter } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import CustomerNavBar from "./customer/CustomerNavBar";
import ManagerNavBar from "./restaurantmanager/ManagerNavBar";
import AgentNavBar from "./deliveryagent/AgentNavBar";
import { AuthProvider, useAuth } from "./contextapi/AuthContext";

import Contact from "./Contact";

function AppContent() 
{
  const { isAdminLoggedIn, isCustomerLoggedIn, isAgentLoggedIn, isManagerLoggedIn } = useAuth();

  return (
    <div>
      <BrowserRouter>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isCustomerLoggedIn ? (
          <CustomerNavBar />
        ) : isAgentLoggedIn ? (
          <AgentNavBar />
        ): isManagerLoggedIn ? (
          <ManagerNavBar />
        ) : (
          <MainNavBar />
        )}
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;