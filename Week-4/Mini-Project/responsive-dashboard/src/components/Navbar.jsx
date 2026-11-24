import { useTheme } from "../context/ThemeContext";

export default function Navbar({ sidebarOpen, onToggleSidebar }) {
    const { dark, toggleTheme } = useTheme();

    return (

        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700">

            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={onToggleSidebar}
                    className="p-3 md:hidden"
                    aria-label={sidebarOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={sidebarOpen}
                    aria-controls="sidebar-navigation"
                >
                    ☰
                </button>
                <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>

            <button
                onClick={toggleTheme}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
                {dark ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}