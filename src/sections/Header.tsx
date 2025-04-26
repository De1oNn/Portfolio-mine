export const Header = () => {
    return (
        <div className="flex justify-between items-center fixed top-3">
            <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
                <a href="#" className="nav-item hover:bg-white/10 ">Home</a>
                <a href="#" className="nav-item hover:bg-white/10">Projects</a>
                <a href="#" className="nav-item hover:bg-white/10">About</a>
                <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/10 hover:text-white">Contact</a>
            </nav>
        </div>
    )
}