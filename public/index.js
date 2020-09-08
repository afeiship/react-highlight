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
import ReactHighlight from '../src/main';
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
