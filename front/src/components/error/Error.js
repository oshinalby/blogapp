import React from 'react';

function Error(props) {
    return (
        <div>
            <p>Node.js has a fantastic standard library, including first-class support for networking.

The createServer() method of http creates a new HTTP server and returns it.

The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.

Whenever a new request is received, the request event is called, providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).

Those 2 objects are essential to handle the HTTP call.</p>
        </div>
    );
}

export default Error;
