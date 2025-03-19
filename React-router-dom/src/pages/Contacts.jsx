import { useNavigate } from "react-router-dom"
export default function Contact() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Contact page</h1>
            <div className="contact-buttons">
                <button onClick={() => navigate('info')}>Contact Info</button>
                <button onClick={() => navigate('forms')}>Contact Forms</button>
            </div>
        </>
    )
}