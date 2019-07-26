import ReactHighlight from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';
import 'highlight.js/styles/atom-one-dark.css';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <dl className="item">
          <dt>Highlight HTML</dt>
          <dd>
            <ReactHighlight lang="html">
              {require('raw-loader!./index.ejs').default}
            </ReactHighlight>
          </dd>
        </dl>
        <dl className="item">
          <dt>Highlight Javascript</dt>
          <dd>
            <ReactHighlight lang="js">
              {require('raw-loader!./assets/demo.js').default}
            </ReactHighlight>
          </dd>
        </dl>
        <dl className="item">
          <dt>Highlight CSS</dt>
          <dd>
            <ReactHighlight lang="css">
              {require('!!raw-loader!./assets/demo.css').default}
            </ReactHighlight>
          </dd>
        </dl>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
