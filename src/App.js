import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Taha Smaoui',
        bio: 'I am a fullstack web developer with a considerable experience in creating and managing websites. My skills include coding with HTML, CSS and JavaScript.',
        imgSrc: 'https://media.licdn.com/dms/image/D4E03AQHOcWNoxwTQ2g/profile-displayphoto-shrink_100_100/0/1703880098218?e=1711584000&v=beta&t=JpDoZyr8pFDPvrJQgZQyurFO-a8CLVV5tIZpAlqQygg',
        profession: 'FullStack Web Developer',
      },
      show: false,
      mountTime: null,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.setState({ mountTime: new Date().getTime() });
    this.interval = setInterval(() => {
      const elapsedTime = Math.floor((new Date().getTime() - this.state.mountTime) / 1000);
      this.setState({ elapsedTime });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((previousState) => ({ show: !previousState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;

    return (
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <h1 style={{backgroundColor:'#316FF6', color:'white'}}>Profile App</h1>
        <button onClick={this.toggleShow} style={{borderRadius:'8px', border:'none', padding:'.5rem', cursor:'pointer'}}>Show Profile</button>
        {show && (
          <div style={{textAlign:'center',border:'1px solid', borderRadius:'15px', marginTop:'2rem', width:'20rem', backgroundColor:'whitesmoke'}}>
            <h2>Full Name: {fullName}</h2> 
            <img src={imgSrc} alt={fullName} style={{width: '8rem', borderRadius:'5px'}} />
            <p> <span style={{fontWeight:'bolder'}}> Bio: </span> {bio}</p>
            <p> <span style={{fontWeight:'bolder'}}> Profession: </span> {profession}</p>
          </div>
        )}
        <p style={{backgroundColor:'whiteSmoke', fontWeight:'bolder', borderRadius:'5px', padding:'5px'}}>Timer: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;

