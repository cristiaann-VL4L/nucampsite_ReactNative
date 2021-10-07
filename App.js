import React from 'react';
import Main from './components/MainComponent';

export default function App() {
    return (
        <Main />
    );
}

// json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000