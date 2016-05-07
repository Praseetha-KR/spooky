'use strict';

var Message = React.createClass({
    render: function() {
        return (
            <div className="message">
                <div className="messageText">{this.props.text}</div>
                <div className="messageSender">{this.props.sender}</div>
            </div>
        );
    }
});

var MessageList = React.createClass({
    render: function() {
        return (
            <div className="messageList">
            {
                this.props.messages.map((msg, i) => {
                    return(
                        <Message
                            key={i}
                            text={msg.text}
                            sender={msg.sender}
                        />
                    )
                })
            }
            </div>
        )
    }
});

var MessageInput = React.createClass({
    getInitialState: function() {
        return { text: '' };
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var message = {
            text: this.state.text,
            sender: this.props.sender
        }
        this.props.onMessageSubmit(message);
        this.setState({ text: '' });
    },
    changeHandle: function(e) {
        this.setState({ text: e.target.value });
    },
    render: function() {
        return (
            <div className="messageInput">
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.changeHandle}
                        value={this.state.text}
                    />
                </form>
            </div>
        )
    }
});

var ChatApp = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            messages: [],
            sender: 'spooky'
        }
    },
    handleMessageSubmit: function(message) {
        var {messages} = this.state;
        messages.push(message);
        this.setState({messages});
        // send socket msg
    },
    render: function() {
        return (
            <div className="chatApp">
                Welcome to Spooky chat!
                <MessageList
                    messages={this.state.messages}
                />
                <MessageInput
                    onMessageSubmit={this.handleMessageSubmit}
                    sender={this.state.sender}
                />
            </div>
        )
    }
});

ReactDOM.render(
    <ChatApp />,
    document.getElementById('msglist')
);

