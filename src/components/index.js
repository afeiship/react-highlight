import classNames from 'classnames';
import highlight from 'highlight.js';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-highlight';

export default class ReactHighlight extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The display language.
     */
    lang: PropTypes.string,
    /**
     * The extra element.
     */
    extra: PropTypes.element
  };

  static defaultProps = {
    lang: 'javascript'
  };

  componentDidMount() {
    highlight.highlightBlock(this.code);
  }

  componentDidUpdate() {
    highlight.initHighlighting.called = false;
    highlight.highlightBlock(this.code);
  }

  render() {
    const { className, lang, extra, children, ...props } = this.props;

    return (
      <pre className={classNames(CLASS_NAME, className)} {...props}>
        {extra}
        <code className={lang} ref={(code) => (this.code = code)}>
          {children}
        </code>
      </pre>
    );
  }
}
