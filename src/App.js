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
import { withRouter } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      concerts: [],
      userInfo: {},
      // error: null Do I need to add this?
    }
  }

  handleSignUp = newUser => {
    this.setState({
      userInfo: newUser
    })
  }

  handleLogin = existingUser => {
    this.setState({
      userInfo: existingUser
    })
  }

  handleDisplayConcerts = results => {
    // sorts & displays concerts starting with the most recent
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
    console.log("add new concert was called");
    const oldConcerts = this.state.concerts;
    this.setState({
        concerts: oldConcerts.concat(newConcert)
    })
  }

    /*
    // this wasn't being called so I deleted(commented) it
    // I think what was happening is it searched for an id after it was already deleted

    handleDeleteConcert = deletedConcert => {
      console.log("handleDeleteConcert in the app was called");
      const newConcerts = this.state.concerts.filter(item => item.id !== deletedConcert.id);
      this.setState({
        concerts: newConcerts
      })
      this.props.history.push("/list")
    }

    */

  handleUpdateConcert = updatedConcert => {
    const editedConcerts = this.state.concerts;
    for (let i = 0; i < editedConcerts.length; i++) {
      if (editedConcerts[i].id == updatedConcert.id) {
        editedConcerts[i] = updatedConcert;
      }
    }
    this.setState({
      concerts: editedConcerts
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <Route 
              path="/"
              component={Nav}
          />
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
                  onDeleteConcert={this.handleDeleteConcert}
                  onDisplayConcerts={this.handleDisplayConcerts}
                />
              } 
            />
            <Route 
              path="/new" 
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
                  onDeleteConcert={this.handleDeleteConcert}
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

export default withRouter(App);