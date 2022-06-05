function Likes({ likes }) {
    const className = likes.liked ? 'countLikes countLikes-liked' : 'countLikes';
    return (
        <button className={className}>
            {likes.count}
        </button>
    );
}

export default Likes;