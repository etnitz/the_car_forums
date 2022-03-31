const TopicCard = (props) => {

    return (
        <div className="topicCard">
            <h3>{props.title} </h3>
            <p>{props.content}</p>
            <h4>{props.author}</h4>            
        </div>
    )
}

export default TopicCard