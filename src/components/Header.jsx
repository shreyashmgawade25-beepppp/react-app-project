function Header({ taskCount }) {
  return <header className="header"><div><h1>React Task Manager</h1><p>Components • Props • Data Flow</p></div><div className="count">{taskCount} Tasks</div></header>;
}
export default Header;