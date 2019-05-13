import React, {Component} from 'react';
import Title from './Title';
import Image from './Image';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
export default class RecipeCard extends Component{
    render(){
        return(
            <div>
                {this.props.meals.map((item, index) =>{
                    return(
                        <a 
                         key={index}
                         href={item.strSource}>
                         <Image source={item.srtMealThumb} text={item.strMeal} />
                         <Title tile={item.strMeal} />
                        </a>
                    )
                })}
            </div>
        )
    }
}