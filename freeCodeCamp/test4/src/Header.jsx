export default function Header(props){
    return (
        <header>
            <h1>I am a header, <strong className="username">{props.name}</strong>.</h1>
        </header>
    )
}