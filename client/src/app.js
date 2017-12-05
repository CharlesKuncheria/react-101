class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          seconds: 0,
          team: ''
        };
    }
  
    tick() {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
            <div>
            At: {this.state.seconds} 
            </div>
            <div>
                Team: {(this.state.seconds > 6) ? this.state.team = 'OWA' : this.state.team = this.props.team}
            </div>
        </div>
      );
    }
  }

ReactDOM.render(<Timer team="Yammer" />, document.getElementById('root'));