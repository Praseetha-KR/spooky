'use strict';

var chatApp = React.createClass({
    // getInitialState: function() {
    //     return { messages: [], text: '' };
    // },
    render: function() {
        return (
            console.log('return')
        );
    }
});

ReactDOM.render(
    <chatApp />,
    document.getElementById('test')
);
