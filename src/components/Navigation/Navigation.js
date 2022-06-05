import NavItem from "../NavItem/NavItem";

function Navigation() {
    return (
        <nav className="navigation">
            <NavItem link="#" label="Explore" />
            <NavItem link="#" label="Stats"  />
            <NavItem link="#" label="Drops"  />
            <NavItem link="#" label="Activity" />
        </nav>
    );
}

export default Navigation;