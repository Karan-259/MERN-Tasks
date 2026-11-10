import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, onNavigate }) {
    return (
        <aside
            id="sidebar-navigation"
            className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white p-6 transition-transform md:static md:translate-x-0 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

            <nav className="flex flex-col gap-4">
                <Link to="/" onClick={onNavigate} className="hover:text-blue-400">Dashboard</Link>
                <Link to="/users" onClick={onNavigate} className="hover:text-blue-400">Users</Link>
                <Link to="/reports" onClick={onNavigate} className="hover:text-blue-400">Reports</Link>
                <Link to="/settings" onClick={onNavigate} className="hover:text-blue-400">Settings</Link>
            </nav>
        </aside>
    );
}