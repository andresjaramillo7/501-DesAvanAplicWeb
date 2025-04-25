import Menu from "./menuRole";
import Dashboard from "./dashboard";
import { UserProvider } from './userContext';

function Class6() {
  return (
    <div className="class-container">
      <h1 className="class-title">Class 6</h1>
      <p className="class-description">Role-Based Access Control (RBAC).</p>
      <UserProvider>

        <Menu />
        <Dashboard />
      </UserProvider>

      <a href="/src/class6/A01028889/milestone2.html" className="class-button-link">
        Go to A01028889's Menu
      </a>
    </div>
  );
}

export default Class6;