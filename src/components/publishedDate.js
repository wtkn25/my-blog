import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from '@fortawesome/free-solid-svg-icons'

const PublishedDate = (props) => {
  console.log(props.props)
  return (
    <Wrapper>
      <ClockFontAwesomeIcon icon={faClock} />{props.props}
    </Wrapper>
  )
}

export default PublishedDate

const Wrapper = styled.p`
  color: #555;
  font-size: 0.7rem;
`

const ClockFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`
