import ListItems from './items.json' assert {type: 'json'}

const Items = () => {
  let list = ListItems.soccer.balls;
  console.log(list);
  //  var jsonValue = JSON.parse(ListItems);
  //  var list = jsonValue.soccer.balls;

   
    return ( 
       
       <div className="items">
        <h1>{list[1].name}</h1>
       </div>
     );
}
 
export default Items;