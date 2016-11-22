let React = require('react');

let WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        let location = this.refs.location.value;
        if (location.length) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <div>
              <h2>Get Weather</h2>
              <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="location" placeholder="Enter city name"/>
                <button>Get Weather</button>
              </form>
            </div>
        );
    }
});

module.exports = WeatherForm;