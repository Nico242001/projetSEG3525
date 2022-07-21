import { useState } from "react";
let list = ["I love my new Soccer ball!", "Ordered my new Hockey stick and it arrived the next day!",
"My cleats broke and had no issue returning the pair and getting a new one!", "My kids love the new Basketball they got for Christmas!",
"My son loves the new basketball shirt I got him, he never wants to take it off!", "I love going skating in the new skates I bought last week."];

const Board = () => {
    const [listShow, setListShow] =useState(list);
    const [revVal, setRevVal] = useState('');
    const [addList, setAddList] = useState("add");
    const addRev = (e) => {
        document.getElementById("error").innerHTML = "";
        let newRev = revVal;
        newRev = newRev.replace(/ /g, "");
        if(newRev.length == 0){
            document.getElementById("error").innerHTML = "*please enter a message"
        } else{
            let newList = [revVal];
            list = newList.concat(listShow);
            console.log(list);
            document.getElementById("input").value="";
            setListShow(list);          
        }
    };
    return (<div className="board bg-light">
        <div className="container text-center"><h1 className="mx-auto text=center">Reviews</h1></div>
        <div className="container mx-auto">
            <div class="overflow-auto mx-auto border border-3 border-dark dialog" >
                {list.map((element) => (

                    <p className="p-2 mt-2 mb-2 mx-2 radius">{element}</p>
                ))
                }
            </div>
            <div id="error" width="400px" className="red mx-auto"></div>
            <div className="mx-auto rev mt-2">
                <input type="text" autocomplete="false"
                id="input"
                value={revVal}
                onChange={(e) => setRevVal(e.target.value)}
                 className="input-board"></input> <button type="button" className="btn btn-secondary btn-color" onClick={(e) => { addRev(e) }}>Send</button>
            </div>
        </div>
    </div>);
}

export default Board;