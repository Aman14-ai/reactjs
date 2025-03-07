import Header from "./components/Header";
import './components/index.css';
import Entry from "./components/entry";

function Greeting() {
    const hours = new Date().getHours();
    console.log(hours);
    let timeOfDay;
    if (hours < 12) {
        timeOfDay = "morning";
    }
    else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
    }
    else {
        timeOfDay = "night";
    }
    return (
        <>
            <h1 className="greeting">Good {timeOfDay}</h1>
        </>
    )
}

function App() {
    return (
        <>
            <Header />
            <Greeting />
            <Entry img={{
                src: 'https://media.istockphoto.com/id/1192780580/photo/fuji-mountain-red-maple-tree-and-fisherman-boat-with-morning-mist-in-autumn-kawaguchiko-lake.jpg?s=612x612&w=0&k=20&c=-FiZmc4qf2lVWlHf1WxysjoPJN7doER4qRmoPDLJpSw=',
                alt: 'fuji mountain'
            }} title='Mount Fuji' country='Japan' googleLinks='https://en.wikipedia.org/wiki/Mount_Fuji' dates='12 Jan, 2021 - 24 Jan, 2021' text='Mount Fuji is the tallest mountain in Japan, standing at 3,776 metres . Mount Fuji is the single most popular tourist site in Japan , for both Jpapanese and foreign tourists.   ' />

            <Entry img={{
                src: 'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
                alt: 'fuji mountain'
            }} title='Nature' country='India' googleLinks='https://en.wikipedia.org/wiki/India' dates='14 Sep, 2024 - 24 Jan, 2024' text='However India is best country due its people in older times who are very sensitive and loveable . but in present time love means money not more than that due to which many people losts its ownself.' />

            <Entry img={{
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGI7rJ5BOeMv6Xx2KQi1go__TG3cH-Ze_SDVV3M8TJstlbWp-RG2r8aJAwqbKWvb5TW-s&usqp=CAU',
                alt: 'fuji mountain'
            }} title='Love' country='Bihar' googleLinks='https://en.wikipedia.org/wiki/Bihar' dates='14 Sep, 2024 - 24 Jan, 2024' text='However India is best country due its people in older times who are very sensitive and loveable . but in present time love means money not more than that due to which many people losts its ownself.' />

        </>
    )
}
export default App