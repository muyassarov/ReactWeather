let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        let _this = this;

        debugger;

        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then(function(temp) {
            _this.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage) {
            alert(errorMessage);
            _this.setState({isLoading: false});
        });
    },
    render: function() {
        let {isLoading, temp, location} = this.state;
        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        return (
            <div>
              <WeatherForm onSearch={this.handleSearch}/>
              {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;