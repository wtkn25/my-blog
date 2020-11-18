import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <CopyWrite>Created by iratawa © 2020</CopyWrite>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`

const CopyWrite = styled.p`
  padding: 1rem;
`
