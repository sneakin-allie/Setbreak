const obj = {
    PORT: process.env.PORT || 8080,
    // API_ENDPOINT: `http://localhost:8000`,
    API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || `https://mighty-reef-98621.herokuapp.com/`,
}

export default obj;