import classNames from 'classnames';
import highlight from 'highlight.js';
import React, { Component } from 'react';

const CLASS_NAME = 'react-highlight';
export type ReactHighlightProps = {
  className?: string;
  lang?: string;
  extra?: any;
}

export default class ReactHighlight extends Component<ReactHighlightProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    lang: 'javascript'
  };

  private code;

  componentDidMount() {
    highlight.highlightElement(this.code);
  }

  componentDidUpdate() {
    // highlight.initHighlighting.called = false;
    highlight.highlightElement(this.code);
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
