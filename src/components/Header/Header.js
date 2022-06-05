import Navigation from "../Navigation/Navigation";
import SearchLine from "../SearchLine/SearchLine";

function Header({ search, setSearch }) {
    return (
        <header className="header">
            <a href="/" className="logo">
                NTFs
            </a>
            <SearchLine search={search} setSearch={setSearch} />
            <Navigation />
            <a href="#" className="create">Create</a>
            <a href="#" className="wallet">Wallet</a> 
            <a href="#" className="profileLink">
                <img className="avatar" src="img/avatars/9.jpg" width="32px" height="32px" />
            </a>
        </header>
    );
}

export default Header;