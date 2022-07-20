const Board = () => {
    let list=["I love my new Soccer ball!", "Ordered my new Hockey stick and it arrived the next day!", "My cleats broke and had no issue returning the pair and getting a new one!",]
    return (<div className="board bg-light">
        <div className="container text-center"><h1 className="mx-auto text=center">Reviews</h1></div>
        <div className="container mx-auto">
            <div class="overflow-auto mx-auto border border-3 border-dark dialog" >
                {list.map((element) => (

                    <p className="p-2 mt-2 mb-2 mx-2 bg-dark white">{element}</p>
                ))

                }

            </div>
            <div className="border border-3 border-dark mx-auto rev">
                <input type="text" className="input-board"></input> <button type="button" className="btn btn-secondary">Send</button>
            </div>
        </div>
    </div>);
}

export default Board;