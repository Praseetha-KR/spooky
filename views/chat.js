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
})
var ChatApp = React.createClass({
    getData: function() {
        return [
            {
                text: 'Lumos 🔦',
                sender: 'Harry'
            },
            {
                text: 'Wingardium leviosa 🍃',
                sender: 'Hermione'
            },
            {
                text: 'Avada kedavra 👿🐍💎',
                sender: 'Voldemort'
            }
        ]
    },
    render: function() {
        return (
            <div className="chatApp">
                Welcome to Spooky chat!
                <MessageList messages={this.getData()} />
            </div>
        )
    }
});

ReactDOM.render(
    <ChatApp />,
    document.getElementById('msglist')
);

