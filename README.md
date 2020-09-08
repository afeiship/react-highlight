# react-highlight
> A simple React wrapper around the Highlight.js library.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-highlight
```

## update
```shell
npm update @feizheng/react-highlight
```

## properties
| Name      | Type    | Required | Default      | Description                           |
| --------- | ------- | -------- | ------------ | ------------------------------------- |
| className | string  | false    | -            | The extended className for component. |
| lang      | string  | false    | 'javascript' | The display language.                 |
| extra     | element | false    | -            | The extra element.                    |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-highlight/dist/style.scss";

  // customize your styles:
  $react-highlight-options: ()
  ```
2. import js
  ```js
  import NxOfflineSw from '@feizheng/next-offline-sw';
  import ReactGithubCorner from '@feizheng/react-github-corner';
  import {
    ToolbarFooter, ToolbarHeader, Window,
    WindowContent
  } from '@feizheng/react-photon';
  import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
  import 'highlight.js/styles/atom-one-dark.css';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactHighlight from '@feizheng/react-highlight';
  import './assets/style.scss';


  class App extends React.Component {
    state = { hasUpdate: false };

    componentDidMount() {
      NxOfflineSw.install({
        onUpdateReady: () => {
          this.setState({ hasUpdate: true });
        }
      });
    }

    render() {
      return (
        <div className="p-3 app-container">
          {/* Core components usage start */}
          <Window relative>
            <ToolbarHeader title="header" />
            <WindowContent>
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
            </WindowContent>
            <ToolbarFooter title="footer" />
          </Window>
          {/* Core components usage end */}
          <ReactSwUpdateTips value={this.state.hasUpdate} />
          <ReactGithubCorner value="https://github.com/afeiship/react-highlight" />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-highlight/


## license
Code released under [the MIT license](https://github.com/afeiship/react-highlight/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-highlight
[version-url]: https://npmjs.org/package/@feizheng/react-highlight

[license-image]: https://img.shields.io/npm/l/@feizheng/react-highlight
[license-url]: https://github.com/afeiship/react-highlight/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-highlight
[size-url]: https://github.com/afeiship/react-highlight/blob/master/dist/react-highlight.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-highlight
[download-url]: https://www.npmjs.com/package/@feizheng/react-highlight
