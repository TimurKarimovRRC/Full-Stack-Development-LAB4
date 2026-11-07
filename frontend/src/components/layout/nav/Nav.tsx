import { NavLink } from "react-router-dom";

export function Nav() {
    return (
        <nav aria-label="Main navigation">
            <ul>
                <li>
                    <NavLink to="/employees">
                        Employees
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/organization">
                        Organization
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}