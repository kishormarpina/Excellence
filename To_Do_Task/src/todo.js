import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Todo extends React.Component {
    state = {
      todo:"",
      todos:[]
    }
    handlechange= event =>{
      console.log(this.state.todo)
      console.log(event.target.value)
      this.setState({
        todo:event.target.value
      })
    }
    Addtodo= ()=> {
      if(this.state.todo){
        const newtodos = [...this.state.todos]
        newtodos.push(this.state.todo)
        this.setState({todos:newtodos})
      }
      }
    render(){
      return (
        <div>
            <center>
            <input className="input" onChange={this.handlechange} type="text" value={this.state.todo} placeholder="add todo"/>
            <button className="button" onClick={this.Addtodo} type="submit">addtodo</button>
          </center>
          <ListGroup>
            {this.state.todos.map((todo,ind) => {
               return (<ListGroup.Item>  <p>{ind}-{todo}</p></ListGroup.Item>
            )})}
          </ListGroup>
        </div>
          );
  
    }
    
  }
  
  export default Todo;