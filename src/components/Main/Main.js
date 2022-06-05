import { useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import Tokens from "../Tokens/Tokens";

function Main({ search }) {
    const [filter, setFilter] = useState(-1);

    return (
        <main className="main">
            <h1 className="headerExplore">
                Explore NTFs
            </h1>
            <FilterBar filter={filter} setFilter={setFilter} />
            <Tokens filter={filter} search={search} />
        </main>
    );
}

export default Main;