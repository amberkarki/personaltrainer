import  React from 'react';
class Trainings extends React.Component {
  constructor() {
    super();
    this.state = {
      training: '',
      countstart : 1 ,
      countend :0,
      
    };
    
  }

  componentDidMount() {
    this.count();
  }

  counter = () => {
    
      fetch ('https://customerrest.herokuapp.com/api/trainings')
      .then(response => response.json())
      .then(responseData => this.setState({
        training:responseData.content,
      }))
     
      .catch(err => console.error(err))

      this.setState({countend:this.state.training.length})
    
  

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
         <p>
         <h1> {this.state.countstart}</h1>
        </p>
      </div>
    );
  }
}
export default Trainings;