function Seler({ user }) {
    return (
        <a href={user.link} className="seller">
            <img className="sellerAvatar" src={user.avatar} width="32px" height="32px" />
            {user.name}
        </a>
    );
}

export default Seler;