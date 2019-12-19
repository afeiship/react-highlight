import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import highlight from 'highlight.js';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-highlight';

export default class extends Component {
  static propTypes = {
    className: PropTypes.string,
    lang: PropTypes.string
  };

  static defaultProps = {
    lang: 'javascript'
  };

  constructor(inProps) {
    super(inProps);
    this.code = React.createRef();
  }

  componentDidMount() {
    highlight.highlightBlock(this.code.current);
  }

  componentDidUpdate() {
    highlight.initHighlighting.called = false;
    highlight.highlightBlock(this.code.current);
  }

  render() {
    const { children, className, lang, ...props } = this.props;

    return (
      <pre className={classNames(CLASS_NAME, className)} {...props}>
        <code className={lang} ref={this.code}>
          {children}
        </code>
      </pre>
    );
  }
}
