

import  React from 'react';
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: '',
      countstart : 1 ,
    
    };
    
  }

  componentDidMount() {
    this.count();
  }

  counter = () => {
    
      fetch ('https://customerrest.herokuapp.com/api/customers')
      .then(response => response.json())
      .then(responseData => this.setState({
       customers:responseData.content,
      }))
     
      .catch(err => console.error(err))

      this.setState({countend:this.state.customers.length})
    
  

    if(this.state.countstart < this.state.countend) {
      this.setState({countstart : this.state.countstart + 1})
    }
  }


  count() {
    setInterval(()=>
    {
    this.counter()
    }
     , 100)
  }

  render() {
    return (
      <div>
         <p >
          <h1>{this.state.countstart}</h1>
        </p>
      </div>
    );
  }
}
export default Counter;


