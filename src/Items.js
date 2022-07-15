import {ListItems} from './items.json' assert{type:"json"}

const Items = () => {
  // let list = require(ListItems);
  // console.log(list.soccer.balls);
  //  var jsonValue = JSON.parse(ListItems);
  //  var list = jsonValue.soccer.balls;
  console.log(ListItems.soccer.balls)

   
    return ( 
       
       <div className="items">
        {/* <h1>{list[1].name}</h1> */}
       </div>
     );
}
 
export default Items;