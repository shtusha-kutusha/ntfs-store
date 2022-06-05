import { useRef } from "react";

function SearchLine({ search, setSearch }) {
    function onChange() {
        const value = ref.current.value.toLowerCase();
        setSearch(value);
    }

    const ref = useRef();

    return (
        <form className="searchForm" action="/search">
            <input className="search" placeholder="Search items, collections, and accounts" ref={ref} value={search} onChange={onChange} />
        </form>
    );
}

export default SearchLine;