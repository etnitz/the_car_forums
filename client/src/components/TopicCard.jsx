const TopicCard = (props) => {

    return (
        <div className="topicCard">
            <h3>{props.title} </h3>
            <p>{props.post}</p>
            
        </div>
    )
}

export default TopicCard