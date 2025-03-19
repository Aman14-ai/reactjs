import { useNavigate } from "react-router-dom"
export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h1>404 | Page not found.</h1>
            <div className="contact-buttons">
                <button onClick={() => navigate('/')}>Go To Home page</button>
            </div>
        </div>
    )
}