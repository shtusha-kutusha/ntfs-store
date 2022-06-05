import TokenItem from "../TokenItem/TokenItem";
import items from "../../data.json";

function Tokens({ filter, search }) {
    function filterItem(result, item, index) {
        const isSearch = search === '' || (item.name.toLowerCase().includes(search) || item.user.name.toLowerCase().includes(search));
        const isFilter = isSearch && (filter === -1 || (item.tags && item.tags.includes(filter)));
        if (isSearch && isFilter) result.push(<TokenItem token={item} key={index} />);
        return result;
    }
    
    const tokens = items.reduce(filterItem, []);
    
    return (
        <section className="tokensSale">
            {tokens}
        </section>
    );
}

export default Tokens;