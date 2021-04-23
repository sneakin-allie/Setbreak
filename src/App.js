import React from 'react';
import { Route } from 'react-router-dom';
import ConcertList from './ConcertList/ConcertList';
import LandingPage from './LandingPage/LandingPage';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AddConcertForm from './AddConcertForm/AddConcertForm';
import StatsPage from './StatsPage/StatsPage';
import EditConcertForm from './EditConcertForm/EditConcertForm'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: [],
      userInfo: {}
    }
  }

  /*
  componentDidMount() {
    API call will go here
  }
  */

  handleSignUp = (user) => {
    this.setState({
      userInfo: user
    })
  }

  handleAddConcert = (concert) => {
    const currentConcerts = this.state.concerts;
    this.setState({
        concerts: currentConcerts.concat(concert)
    })
  }

  handleDeleteConcert = (concert) => {
    const updatedConcerts = this.state.concerts.filter(item => item.id !== concert.id);
    this.setState({
        concerts: updatedConcerts
    })
  }

  handleUpdateConcert = (updatedConcert) => {
    // get the array of concerts from state and put it in a new variable
    console.log(updatedConcert);
    const editedConcerts = this.state.concerts;
    // loop through array and find concert to update by id
    for (let i = 0; i < editedConcerts.length; i++) {
      console.log(editedConcerts[i].id, updatedConcert.id)
      if (editedConcerts[i].id === updatedConcert.id) {
        // update the index
        editedConcerts[i] = updatedConcert;
      }
    }
    // update state with new array (outside of loop)
    this.setState({
      concerts: editedConcerts
    })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <Route 
            exact path="/" 
            component={(routeProps) => 
              <LandingPage 
                {...routeProps} 
                userInfo={this.state.userInfo}
                onSignUp={this.handleSignUp}
              />
            } 
          />
          <Route
            path="/list"
            render={(routeProps) => 
              <ConcertList 
                {...routeProps} 
                concerts={this.state.concerts} 
                onDeleteConcert={this.handleDeleteConcert}
              />
            } 
          />
          <Route 
            path="/new" 
            render={(routeProps) => 
              <AddConcertForm 
                {...routeProps}
                onAddConcert={this.handleAddConcert}
              />
            } 
          />
          <Route 
            path="/edit/:id" 
            render={(routeProps) => 
              <EditConcertForm 
                {...routeProps}
                concerts={this.state.concerts} 
                onUpdateConcert={this.handleUpdateConcert}
              />
            } 
          />
          <Route
            path="/stats"
            render={(routeProps) =>
              <StatsPage
                {...routeProps}
              />
            }
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;