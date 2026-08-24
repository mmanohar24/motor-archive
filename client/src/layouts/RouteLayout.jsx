import { NavLink, Outlet } from "react-router-dom";

const RouteLayout = () => {

    return (
        <div>

            <header className="header px-8 py-4 bg-purple-700 rounded-lg mx-6 mt-4">
                <div className="nav flex justify-between items-center">

                    <div>
                        <p className="text-white font-bold text-xl italic">  Motor Archive </p>
                    </div>

                    <nav className="flex gap-6">
                        <NavLink to="/" className="text-white hover:text-purple-200 transition-colors"> Home </NavLink>
                        <NavLink to="/login" className="text-white hover:text-purple-200 transition-colors"> Login </NavLink>
                        <NavLink to="/signup" className="text-white hover:text-purple-200 transition-colors"> Sign Up </NavLink>
                        <NavLink to="/buy" className="text-white hover:text-purple-200 transition-colors"> Buy </NavLink>
                    </nav>

                </div>
            </header>

            <main>
                <Outlet />
            </main>

        </div>
    )

}

export default RouteLayout;