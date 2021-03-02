import './Message.css';

const Message = (props) => {
    return (
                <div className='message'
            style={{
                alignSelf: props.author === "robot" ? "flex-start" : "flex-end"
                // float: props.author === "robot" ? "left" : "right"
            }}
        >
            <div className='message__text'>{props.text}</div>
            <div className='message__author'>{props.author}</div>
        </div>
    )
};

export { Message };