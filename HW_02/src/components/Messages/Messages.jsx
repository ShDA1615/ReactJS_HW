import { Component, Fragment } from "react";


const msgUser = ["msg1", "msg2", "msg3"];
const msgRobot = ["Robot1", "Robot2", "Robot3"];

const getMesg = (arr) => {
    return arr[Math.floor(Math.random() * (arr.length))];
  };

class Messages extends Component {
    state = {
        messages: ["Hello world", "How are you?"],
    };

    addMessage = () => {
        
        const msg = getMesg(msgUser) + " " + "User";
        this.setState({ messages: [...this.state.messages, msg ] },);
    };

    componentDidUpdate() {
       
        console.log("componentDidUpdate");
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                const msg =  getMesg(msgRobot)  + " " + "Robot";
                this.setState({
                    messages: [...this.state.messages, msg],
                });
            }, 1000);
        }
    }

    render() {
        console.log("render", this.state);
        const { messages = [] } = this.state;

        return (
            <Fragment>
                <div className="messages">
                    {messages.map((item, index) => (
                        <Message key={index} text={item} />
                    ))}
                </div>

                <button onClick={this.addMessage}>Send message</button>
            </Fragment>
        );
    }
}

const Message = (props) => {
    return <div className="my-class">{props.text}</div>;
 };

export { Messages };
