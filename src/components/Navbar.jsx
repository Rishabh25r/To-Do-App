import './Navbar.css';

export default function Navbar({ user }) {
  return (
    <nav className="navbar">
      <div className="logo">📝 TaskFlow</div>
      <div className="user-info">Logged in as: {user?.email || 'User'}</div>
    </nav>
  );
}