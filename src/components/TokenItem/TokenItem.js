import Likes from "../Likes/Likes";
import Seller from "../Seller/Seller";

function TokenItem({ token }) {
    const { name, image, bid, buy, user, like } = token;

    return (
        <article className="tokens">
            <a href="#" className="tokenName">{name}</a>
            <img className="tokenImg" src={image} />            
            <div className="tokenConditions">  
                <button className="tokenItemBuy">
                    <span className="auction">Auction</span>
                    <span className="price">${bid.toFixed(2)}</span>
                </button> 
                <button className="tokenItemBuy">
                    <span className="auction">Buy now</span>
                    <span className="price">${buy.toFixed(2)}</span>
                </button>
            </div>
            <Seller user={user} />
            <Likes likes={like} />
        </article>   
    );
}

export default TokenItem;