import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id : 0,
            title : "",
            ingredients : "",
            text : "",
            recipes : []
        }
    }

    updateInput(key, value) {
        this.setState({
            [key] : value
        })
    }


    addRecipe() {
        const newRecipe = {
            id : 1 + this.state.id,
            value : {
                title : this.state.title.slice(),
                ingredients : this.state.ingredients.slice(),
                text : this.state.text.slice()
            }
        };

        this.setState({
            id : newRecipe.id,
            title : "",
            ingredients : "",
            text : "",
            recipes : [...this.state.recipes, newRecipe]
        })
    }



    render() {
        return (
            <div className="App">
                <h1 className="app-title">Книга рецептов</h1>
                <div className="container">
                    Добавить рецепт
                    <br/>
                    <textarea 
                        className="input-title"
                        type="text"
                        placeholder="Название"
                        value={this.state.title}
                        onChange={(e) => this.updateInput("title", e.target.value)}
                    />
                    <textarea 
                        className="input-ingredients"
                        type="text"
                        placeholder="Список ингридиентов"
                        value={this.state.ingredients}
                        onChange={(e) => this.updateInput("ingredients", e.target.value)}
                    />
                    <textarea
                        className="input-text"
                        type="text"
                        placeholder="Способ приготовления"
                        value={this.state.text}
                        onChange={(e) => this.updateInput("text", e.target.value)}
                    />
                    <button
                        className="btn add-btn"
                        onClick={() => this.addRecipe()}
                    >
                        Добавить
                    </button>
                    <div>
                        
                                <div className="recipe" >
                                <div className="title">
                                    Омлет
                                    </div>
                                    <div className="ingredients">
                                    яйца, молоко, соль, масло растительное
                                    </div>
                                    <div className="text">
                                    Яйца разбиваем в глубокую миску. Добавляем соль. 
                                    Разбалтываем вилкой или венчиком до однородности. 
                                    Вливаем молоко.
                                    Тщательно перемешиваем. 
                                    В сковороде на среднем огне разогреваем растительное масло. 
                                    Выливаем яичную смесь в сковороду. 
                                    Убавляем огонь до минимума, накрываем сковороду 
                                    крышкой и готовим омлет примерно 5 минут, до полного схватывания яичной массы.
                                    </div>
                                </div>
                            
                    </div>
                    <div>
                        {this.state.recipes.map(recipe => {
                            return(
                                <div
                                    key={recipe.id}
                                    className="recipe"
                                >
                                    <div className="title">
                                    {recipe.value.title}
                                    </div>
                                    <div className="ingredients">
                                    {recipe.value.ingredients}
                                    </div>
                                    <div className="text">
                                    {recipe.value.text}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;