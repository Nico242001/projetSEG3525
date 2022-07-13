import { useParams } from "react-router-dom";
const Sport = () => {
    let name;
    const {sport} = useParams();
    if(sport === "Hockey"){
        name ="Hockey"
    } if(sport === "Soccer"){
        name ="Soccer"
    }else{
        name = "Basketball"
    }
    return ( 
        <div>{name}</div>
    );

}
 
export default Sport;