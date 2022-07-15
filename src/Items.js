import Items from './items.json'

const Items = () => {
   var jsonValue = JSON.parse(Items);
   var list = jsonValue.soccer.balls;

   
    return ( 
       
       <div className="items">
        <h1>{list[1].name}</h1>
       </div>
     );
}
 
export default Items;