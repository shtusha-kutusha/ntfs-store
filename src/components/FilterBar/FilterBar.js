import FilterOption from "../FilterOption/FilterOption";

const OPTIONS = [
    {
        value: -1,
        name: "All",
    },
    {
        value: 0,
        name: "Trending",
    },
    {
        value: 1,
        name: "Collectibles",
    },
    {
        value: 2,
        name: "Domain Names",
    },
    {
        value: 3,
        name: "Music",
    },
    {
        value: 4,
        name: "Photography",
    }
]

function FilterBar({ filter, setFilter }) {
    const filterOptions = OPTIONS.map((option, index) => <FilterOption index={index} option={option} filter={filter} setFilter={setFilter} key={index} />);

    return (
        <form className="filterBar">
            {filterOptions}
            <button className="buttonBar filter">
                Apply filter
            </button>
            <button className="buttonBar sort">
                Sort by
            </button>  
        </form>
    );
}

export default FilterBar;