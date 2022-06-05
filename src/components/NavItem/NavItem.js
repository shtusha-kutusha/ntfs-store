function NavItem({ link, label }) {
    return (
        <a href={link} className="navItem">
            {label}
        </a>
    );
}

export default NavItem;