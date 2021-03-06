var React = require('react');

var PageInner = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },

    render: function() {
        return (
            <div className="gb-page-inner">
                {this.props.children}
            </div>
        );
    }
});

module.exports = PageInner;
