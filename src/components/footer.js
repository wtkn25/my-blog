import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <CopyWrite>Created by watakn © 2020</CopyWrite>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  /* background-color: #696969; */
`

const CopyWrite = styled.p`
  color: #000;
  margin: 0;
  padding: 1rem;
`
