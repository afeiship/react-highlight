# react-highlight
> A simple React wrapper around the Highlight.js library.

## install
```shell
npm install -S afeiship/react-highlight
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
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactHighlight from 'react-highlight';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactHighlight />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-highlight/

## resouces
- https://github.com/bvaughn/react-highlight.js
