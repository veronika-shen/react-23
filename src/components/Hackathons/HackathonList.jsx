import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function HackathonList(){
    const [hackathons, setHackathons] = useState(null);

    useEffect(()=>{
        fetch('./hackathons.json')
        .then(response => response.json())
            .then(response => setHackathons(response.map(h => h.hackathon)))
            .catch(error => console.error('Ошибка', error))
    },[])

    return(
        <div>
        <h1>Список хакатонов</h1>
        <ul>
            {hackathons.map((hackathon) => (
                <li key={hackathon.id}>
                    <Link to={`/hachathons/${hackathon.id}`}>{hackathon.name}</Link>
                </li>
            ))}
        </ul>
        </div>
    )
}