import { Navigate, Route, Routes } from "react-router-dom";

import { Employees } from "./components/features/employees/Employees";
import { EmployeeForm } from "./components/features/employees/EmployeeForm";
import { Organization } from "./components/features/organization/Organization";

import { Header } from "./components/layout/header/Header";
import { Nav } from "./components/layout/nav/Nav";
import { Footer } from "./components/layout/footer/Footer";

import { useEmployees } from "./hooks/useEmployees";

export default function App() {
    const {
        departments,
        firstName,
        lastName,
        departmentName,
        errors,
        handleSubmit,
    } = useEmployees();

    return (
        <>
            <Header />
            <Nav />

            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/employees" replace />}
                />

                <Route
                    path="/employees"
                    element={
                        <>
                            <Employees departments={departments} />

                            <EmployeeForm
                                departments={departments}
                                firstName={firstName}
                                lastName={lastName}
                                departmentName={departmentName}
                                errors={errors}
                                onSubmit={handleSubmit}
                            />
                        </>
                    }
                />

                <Route
                    path="/organization"
                    element={
                        <main>
                            <Organization />
                        </main>
                    }
                />
            </Routes>

            <Footer />
        </>
    );
}