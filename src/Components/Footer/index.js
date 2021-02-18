import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

import { Row, Column } from '../../AppStyles';

const FooterWrapper = Row.extend`
  height: 120px;
  width: 100%;
  padding: 0 80px;
  background: ${props => rgba(props.theme.primary, .8)};
  align-content: center;
  justify-content: space-between;
  >div {
    flex: 1;
    display: flex;
    margin: auto;
    max-width: 1280px;
    justify-content: space-between;
  }
`;
const SocialLink = styled.a`
    align-self: flex-end;
    text-decoration: none;
  i {
    color: white;
  }
`
const Footer = () => (
    <FooterWrapper>
      <div>
        <Column>
          <p>&copy;2018</p>
          <p>Sunbright, LLC</p>
        </Column>
        <Column>
          
        </Column>
        <Column>
          <SocialLink href=""><i className="icon-facebook-square"></i> </SocialLink>
        </Column>
      </div>
    </FooterWrapper>
)

export default Footer;


