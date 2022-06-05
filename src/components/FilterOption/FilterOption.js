function FilterOption({ option, index, filter, setFilter }) {
    function onChange() {
        setFilter(option.value);
    }

    const id = `filter${index}`;

    return (
        <>
            <input className="filterRadio" type="radio" id={id} name="filter" checked={filter === option.value} value={option.value} onChange={onChange} />
            <label className="buttonBar" htmlFor={id}>{ option.name }</label>
        </>
    );
}

export default FilterOption;