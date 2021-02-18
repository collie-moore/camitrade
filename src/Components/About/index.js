import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, SectionBody, Paragraph } from '../../AppStyles';
import appdata from '../../data/appState';

const AboutSection = Section.extend.attrs({
  topcolor: props => props.theme.logoGreen
})``

const Portrait = styled.img`
  float: left;
  margin: 0 20px 0 0;
  width: 170px;
  @media (max-width: 426px) {
    width: 120px;
  }
`

const AboutComponent = () => {

  
    return (
      <AboutSection>
        <SectionTitle>About</SectionTitle>
        <SectionBody>
        <Portrait src={appdata.trishPortrait} alt="Trish Romano"/>
          <Paragraph>
          Trish Romano, CLT, LMT is the founder of MT4W. Trish was on the original flagship staff of the prestigious Mayo Clinic Department of Integrative Medicine, Phoenix, Arizona, opened March, 2015. She treated cancer patients in all stages of their progress and healing. Aiming to treat a larger segment of the local population, Trish transitioned into working her private practice full time. Now she treats cancer patients from all over the valley Phoenix/Scottsdale Metropolitan area throughout Maricopa County.
          </Paragraph>
          <Paragraph>
          Trish has collaborated and established referrals with some of the best doctors and other health care providers in Scottsdale and Phoenix. She has over 17 years experience and thousands of hours advanced training. Every client receives personalized care and consultation, taking into account medical history and current needs.
          </Paragraph>
          <Paragraph>
            Manual Therapy for Wellness provides a multi-disciplinary approach to health and wellbeing, incorporating massage, lymphatic drainage therapy, and myofascial release.
          </Paragraph>
        </SectionBody>
      </AboutSection>
    )
  
}

export default AboutComponent;
