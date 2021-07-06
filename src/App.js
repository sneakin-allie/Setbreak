import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import ConcertList from './ConcertList/ConcertList';
import LandingPage from './LandingPage/LandingPage';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AddConcertForm from './AddConcertForm/AddConcertForm';
import EditConcertForm from './EditConcertForm/EditConcertForm';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      concerts: [],
      userInfo: {},
      isLoggedIn: false
    }
  }

  handleSignUp = newUser => {
    this.setState({
      userInfo: newUser,
      isLoggedIn: true
    })
  }

  handleLogin = existingUser => {
    this.setState({
      userInfo: existingUser,
      isLoggedIn: true
    })
  }

  handleDisplayConcerts = results => {
    const sortedConcerts = results.sort(function(a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return d-c;
    });
    this.setState({
      concerts: sortedConcerts
    })
  }

  handleAddConcert = newConcert => {
    const oldConcerts = this.state.concerts;
    this.setState({
        concerts: oldConcerts.concat(newConcert)
    })
  }

  handleUpdateConcert = updatedConcert => {
    const editedConcerts = this.state.concerts;
    for (let i = 0; i < editedConcerts.length; i++) {
      if (Number(editedConcerts[i].id) === Number(updatedConcert.id)) {
        editedConcerts[i] = updatedConcert;
      }
    }
    this.setState({
      concerts: editedConcerts
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            {isLoggedIn
              ? <Route path="/" component={Nav} />
              : null
            }
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
                  onLogin={this.handleLogin}
                />
              } 
            />
            <Route
              path="/list"
              render={(routeProps) => 
                <ConcertList 
                  {...routeProps} 
                  concerts={this.state.concerts}
                  userInfo={this.state.userInfo}
                  onSignUp={this.handleSignUp} 
                  onLogin={this.handleLogin}
                  onAddConcert={this.handleAddConcert}
                  onUpdateConcert={this.handleUpdateConcert}
                  onDisplayConcerts={this.handleDisplayConcerts}
                />
              } 
            />
            <Route 
              path="/add" 
              render={(routeProps) => 
                <AddConcertForm 
                  {...routeProps}
                  concerts={this.state.concerts} 
                  userInfo={this.state.userInfo}
                  onAddConcert={this.handleAddConcert}
                  onDisplayConcerts={this.handleDisplayConcerts}
                />
              } 
            />
            <Route 
              path="/edit/:id" 
              render={(routeProps) => 
                <EditConcertForm 
                  {...routeProps}
                  concerts={this.state.concerts} 
                  userInfo={this.state.userInfo}
                  onUpdateConcert={this.handleUpdateConcert}
                />
              } 
            />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;