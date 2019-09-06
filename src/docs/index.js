import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../lib/Button';
import { OtherButton } from '../lib/OtherButton';

const App = () => (
  <div>
    <h1>My UI</h1>
    <h2>Button</h2>
    <p>Here's an example of button.</p>
    <Button text="Click me!" />
    <OtherButton color="primary" text="Click me!" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
