import React from 'react';
import 'semantic-ui/dist/semantic.min.css';
import { Button } from 'semantic-ui-react';

export default class Todo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.text.length === 0) {
            return;
        }
        const newItem = {
            id: Date.now(),
            text: this.state.text,
        }
        this.setState({
            items: this.state.items.concat(newItem),
            text: ''
        });
    }
    render() {
        return (
            <div style={{marginTop: '20px'}}>
                <h2 style={{marginLeft: '100px'}}> Todo List</h2>
                <ol>
                {this.state.items.map(item => (
                    <li style={{marginTop: '10px'}} key={item.id}>
                        {item.text}
                        <p style={{color: 'blue'}}>{Date(item.id)}</p>
                        <button style={{marginLeft: '20px'}} id={item.id} 
                        onClick={(e)=>{
                            console.log(e.target.id);
                            const data = [...this.state.items];
                            for (let i = 0; i < data.length; i++) {
                                if (parseInt(data[i].id) === parseInt(e.target.id)) {
                                    data.splice(i, 1);
                                }
                            }
                            console.log(data);
                            
                            this.setState({
                                items: data
                            });
                        }}>Delete</button>
                    </li>
                ))}
                </ol> 
                <form onSubmit={this.handleSubmit}>
                    <div >
                        <div class="ui input" style={{marginLeft: '20px'}}>
                            <input 
                                onChange={(e) => this.setState({text: e.target.value})}
                                value={this.state.text}
                                style={{marginRight: '10px'}}
                            />
                        </div>
                        <Button>
                            Add
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

