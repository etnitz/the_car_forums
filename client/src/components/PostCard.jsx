
const PostCard = (props) => {

    return (
        <div className="postCard">
            <h3>{props.title} </h3>
            <p>{props.content}</p>
            <h4>{props.author}</h4>
            
        </div>
    )
}

export default PostCard