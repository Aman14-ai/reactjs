import location from './location.gif';
export default function Entry(props) {
    return (
        <>
            <article className='journal-entry'>
                <div className="main-img-container">
                    <img className='main-img' src={props.img.src} alt={props.img.alt} />
                </div>

                <div className='div-content-container'>
                    <div className="div-location">
                    <img className='location-img' src={location} alt="location.gif" />
                    <span>{props.country}</span>
                    <a href={props.googleLinks} target='_blank'>View on Google</a></div>
                    <div className="content">
                        <h1>{props.title}</h1>
                        <p>{props.dates}</p>
                        <p>{props.text}</p>
                    </div>
                </div>

            </article>
        </>

    )
}