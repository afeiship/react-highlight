<p align="center">
  <a href="https://afeiship.github.io/react-highlight/">
    <img width="880" src="https://tva1.sinaimg.cn/large/006y8mN6gy1g796xrs48wj30rs07y75d.jpg">
  </a>
</p>

# react-highlight
> A simple React wrapper around the Highlight.js library.

## install
```shell
npm install -S @feizheng/react-highlight
```

## usage
1. import css
  ```scss
  @import "~react-highlight/style.scss";

  // customize your styles:
  $react-highlight-options: ()
  ```
2. import js
  ```js
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
  ```

## documentation
- https://highlightjs.org/
- https://afeiship.github.io/react-highlight/

## resouces
- https://github.com/bvaughn/react-highlight.js
