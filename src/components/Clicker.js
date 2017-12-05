import React from "react";
import "./Clicker.css";
class Counter extends React.Component {
  state = {
    score: 0,
    wins: 0,
    losses: 0
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1});
    if(this.state.score>=6){
      this.setState({ wins: this.state.wins + 1});
      this.setState({ score: this.state.score == 0});
    }

  }
  handleDecrement = () => {
    this.setState({ score: this.state.score - 1});
    if(this.state.score>=6){
      this.setState({ wins: this.state.wins + 1});
      this.setState({ score: this.state.score == 0});
    }
    if(this.state.score==1){
      this.setState({losses: this.state.losses + 1});
      this.setState({ score: this.state.score == 0});
    }
  }
  render() {
    return (
      <div className="panel panel-primary">
        <h1 className="panel-heading"><center>Choose all the characters from the Simpsons!</center></h1>
        <div className="panel-body text-center">
          <h2 id="score">Click Score: {this.state.score}</h2>
          <h3 id="wins">Click Wins: {this.state.wins}</h3>
          <h3 id="losses">Click Losses: {this.state.losses}</h3>

          <button className="two" onClick={this.handleIncrement}>
          <img src="https://vignette.wikia.nocookie.net/simpsons/images/1/11/Milhouse_Van_Houten.png/revision/latest/scale-to-width-down/174?cb=20100602035045" width="200px" height="200px"/>
          </button>
          <button className="seven" onClick={this.handleIncrement}>
            <img src="https://cbsb96radio.files.wordpress.com/2012/08/simpkrusty2-e1346103440864.jpg?w=445&h=1&crop=1" width="200px" height="200px"/>
          </button>
          <button className="eight" onClick={this.handleDecrement}>
            <img src="https://img.buzzfeed.com/buzzfeed-static/static/2017-04/17/18/enhanced/buzzfeed-prod-fastlane-03/anigif_enhanced-9842-1492466857-1.gif?downsize=715:*&output-format=auto&output-quality=auto" width="200px" height="200px" />
          </button>
          <button className="one" onClick={this.handleIncrement}>
            <img src="https://images.moviepilot.com/images/c_limit,q_auto:good,w_600/tccz5ptpysmztvbxwyom/top-10-simpsons-characters.jpg" width="200px" height="200px" />
          </button>
          <button className="eight" onClick={this.handleDecrement}>
            <img src="http://static.tvtropes.org/pmwiki/pub/images/rick_and_morty.jpg" width="200px" height="200px" />
          </button>
          <button className="eight" onClick={this.handleDecrement}>
            <img src="https://pa1.narvii.com/6435/f1ecfb6cdd4002f281b9046d6b1fc1f2295002e6_hq.gif" width="200px" height="200px" />
          </button>
          <button className="eight" onClick={this.handleDecrement}>
            <img src="https://ubistatic19-a.akamaihd.net/resource/en-us/game/southpark/thefracturedbutwhole/spfbw-characters-teamfreedom-mysterion-day.png" width="200px" height="200px" />
          </button>
          <button className="eight" onClick={this.handleDecrement}>
            <img src="http://i42.tinypic.com/2qunrmg.jpg" width="200px" height="200px" />
          </button>
          <button className="five" onClick={this.handleIncrement}>
            <img src="http://uploads.neatorama.com/images/posts/664/73/73664/1404960739-1.jpg" width="200px" height="200px"/>
          </button>
          <button className="eight" onClick={this.handleDecrement}>
            <img src="https://vignette.wikia.nocookie.net/bobsburgerpedia/images/5/5e/Teddy.png/revision/latest?cb=20130305230745" width="200px" height="200px" />
          </button>
          <button className="three" onClick={this.handleIncrement}>
            <img src="https://images.moviepilot.com/images/c_limit,q_auto:good,w_600/p6hsjhcuf2fsjanboo3x/top-10-simpsons-characters.jpg" width="200px" height="200px"/>
          </button>
          <button className="eight" onClick={this.handleDecrement}>
            <img src="http://vignette2.wikia.nocookie.net/bobsburgerpedia/images/b/b7/Gene_Belcher.png/revision/latest?cb=20130114043308" width="200px" height="200px" />
          </button>
          <button className="eight" onClick={this.handleDecrement}>
            <img src="https://i.pinimg.com/736x/4b/53/55/4b53554766a2ed8fe948c08b09f37b1b--stewie-griffin-griffins.jpg" width="200px" height="200px" />
          </button>
          <button className="four" onClick={this.handleIncrement}>
            <img src="https://fthmb.tqn.com/lnHbh2Le_dQVifoCMZ4YyyF0YBk=/768x0/filters:no_upscale()/apu-56a009a03df78cafda9fb86f.jpg" width="200px" height="200px"/>
          </button>
          <button className="eight" onClick={this.handleDecrement}>
            <img src="http://www.cartoondistrict.com/wp-content/uploads/2014/07/Famous-Cartoon-Characters-with-Glasses3.jpg" width="200px" height="200px" />
          </button>
          <button className="eight" onClick={this.handleDecrement}>
            <img src="http://www.educationnews.org/wp-content/uploads/2015/07/fat_character.jpg" width="200px" height="200px" />
          </button>
          <button className="eight" onClick={this.handleDecrement}>
            <img src="https://img.buzzfeed.com/buzzfeed-static/static/enhanced/terminal01/2011/6/29/15/enhanced-buzz-15004-1309375672-34.jpg" width="200px" height="200px" />
          </button>
          <button className="six" onClick={this.handleIncrement}>
            <img src="https://images.moviepilot.com/images/c_limit,q_auto:good,w_600/p3by6wdjjit9qarkbq8k/top-10-simpsons-characters.jpg" width="200px" height="200px"/>
          </button>


        </div>
      </div>
    );
  }
}

export default Counter;
