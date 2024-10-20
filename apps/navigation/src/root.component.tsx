import { UserAccount } from "./auth/UserAccount";

export default function Root() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a data-testid="app-title" className="navbar-brand" href="/">
          Example Micro-Frontend
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/dashboard">
              Dashboard
            </a>
          </li>
        </ul>
        <UserAccount />
      </div>
    </nav>
  );
}
