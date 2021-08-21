import React from 'react';
import ReactHighlight from '../../src/main';
import styled from 'styled-components';
import demoCode from '../assets/demo.rb?raw';
import 'highlight.js/styles/atom-one-dark.css';


const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default (props: any) => {
  return (
    <Container>
      <ReactHighlight lang="ruby">
        {demoCode}
      </ReactHighlight>
    </Container>
  );
};
