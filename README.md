# innovation-hub

We have an the complete application added both frontend and backend for Innovation Hub.

Under the app folder we have the client side react code with Material UI.

1. The App.js has all the react pages that are being sourced for the application.
2. Some of the pages are
    a. MenuAppBar
    b. About
    c. Navigation
    d. IdeasForm
    e. IdeaCardGridContainer 

Under the server folder we have the backend NODE JS apis which read and write data to MongoDB.

1. GET  HOST:PORT/ideas
2. POST HOST:PORT/ideas
    {
        "title": "Innovation Hub",
        "description": "Innovation hub for Condenast!",
        "category": "Technology",
        "event": "Hackathon 2022",
        "additionalInfo": "",
        "documents": ""
    }
3. GET HOST:PORT/categories


