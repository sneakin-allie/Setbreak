const config = {
    PORT: process.env.PORT || 8080,
    // API_BASE_URL: `http://localhost:8000`,
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || `https://mighty-reef-98621.herokuapp.com`,
}

export default config;