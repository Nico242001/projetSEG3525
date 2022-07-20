import { FixedSizeList as List } from 'react-window';

const Board = () => {
    return ( <div className="board bg-light">
<List
    height={150}
    itemCount={10}
    itemSize={35}
    width={300}
  >
    hey
  </List>

    </div> );
}
 
export default Board;