import React from "react";
import { Message } from './Message';
import './Messages.css';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';




class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    state = {
        messages: [
            { text: 'Hello world', author: 'me' },
            { text: "How are you?", author: 'me' }
        ],
        input: '',
    };
   
    addMessage = (message) => {


        this.setState({
            messages: [...this.state.messages, { text: message, author: 'me' }],
            input: '',
        });


    };

    componentDidUpdate() {

        //   console.log("componentDidUpdate");
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {

                this.setState({
                    messages: [...this.state.messages, { text: 'I robot', author: 'robot' }],
                });
            }, 1000);
           
        }

    };

    componentDidMount() {
       // this.textInput.current.focus()
    }

    handleClick = (message) => {
        //console.log(message)
        this.addMessage(message)

    };
    handleChange = (event) => {
        //console.log(event.Key )
        this.setState({ input: event.target.value });
    };

    handleKeyDown = (event, message) => {
       // console.log(event.key)
        if (event.key === 'Enter') {
            this.addMessage(message)
            console.log(message)
        }
    };

    render() {
        //  console.log("render", this.state);
        const { messages = [] } = this.state;

        return (
            <React.Fragment>
                <div className='messages'>
                    {messages.map((item, index) => (
                        <Message key={index} {...item} />
                    ))}
                </div>
               <div style={{width:'100%'}}>
             {/*  <input
                    ref={this.textInput}
                    style={{ fontSize: '22px' }}
                    onChange={this.handleChange}
                    value={this.state.input}
                    onKeyDown={(event) => this.handleKeyDown(event, this.state.input)}
                />

                <button onClick={() => this.addMessage(this.state.input)}>Send message</button>


               */}
                <TextField 
                   label='Введите сообщение'
                   fullWidth= {true}
                   style= {{fontSize: '22px'}}
                   onChange= {this.handleChange}
                   value= {this.state.input}
                   onKeyDown={(event) => this.handleKeyDown(event, this.state.input)}
                /> 
                <Fab onClick={() => this.addMessage(this.state.input)}  >
                    <SendIcon />
                </Fab>
                </div>
            </React.Fragment>
        );
    }
}



export { Messages };
