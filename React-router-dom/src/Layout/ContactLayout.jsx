import Contact from "../pages/Contacts";
import { Outlet } from "react-router-dom";

export default function ContactLayout() {
    return (
        <>
            <Contact />
            <div className="container">
            <Outlet /></div>
        </>
    );
}