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
          <ToolbarHeader title="Highlight ruby" />
          <WindowContent>
            <dl className="item">
              <dd>
                <ReactHighlight lang="ruby">
                  {require('raw-loader!./assets/demo.rb').default}
                </ReactHighlight>
              </dd>
            </dl>
          </WindowContent>
          <ToolbarFooter title="theme: atom-one-dark" />
        </Window>
        {/* Core components usage end */}
        <ReactSwUpdateTips value={this.state.hasUpdate} />
        <ReactGithubCorner value="https://github.com/afeiship/react-highlight" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
