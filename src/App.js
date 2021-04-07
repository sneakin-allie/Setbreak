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
    super(props)
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
        concerts: currentConcerts.concat(concert),
        userInfo: this.state.userInfo
    })
  }

  handleDeleteConcert = (concert) => {
    const updatedConcerts = this.state.concerts.filter(item => item.id !== concert.id);
    this.setState({
        concerts: updatedConcerts
    })
  }

  handleEditConcert = (concert) => {
    
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
                onEditConcert={this.handleEditConcert}
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
            path="/edit" 
            render={(routeProps) => 
              <EditConcertForm 
                {...routeProps}
                // onUpdateConcert={this.handleUpdateConcert}
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