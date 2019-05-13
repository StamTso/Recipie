import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import RecipeCard from './components/RecipeCard';
import NavBar from './components/NavBar'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      meal: ""
    }
  }
  componentDidMount(){
    const reqURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    axios.get(reqURL)
    .then(res => {
      const meal = res.data.meals;
      if(typeof meal === 'object'){
        this.setState({meal});
      }
      console.log(this.state);
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
    var data = this.state.meal;
    return (
      <div className="App">
        <NavBar />
        <div className="Recipe-List">
          {data.length > 0 && <RecipeCard meals={data} />}
        </div>       
      </div>
    );
  }
}
export default App;