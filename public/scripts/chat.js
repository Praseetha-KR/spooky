'use strict';

var chatApp = React.createClass({
    // getInitialState: function() {
    //     return { messages: [], text: '' };
    // },
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
            </div>
        );
    }
});

ReactDOM.render(
    <chatApp />,
    document.getElementById('test')
);
