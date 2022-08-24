import styled from 'styled-components';

const SubTitle = styled.div`
  ${(props) => props.theme.font.normal_16_18};
  padding-top:14px;
  padding-right:10px;
`;

const Pay = styled.div`
  ${(props) => props.theme.font.bold_16_26};
  padding-top:8px;
`;

const CertBtn = styled.button`
  background-color: transparent;
  border:0;
  outline: 0;
  position: absolute;
  margin-top: -60px;
  margin-left: 185px;
`

export { SubTitle, Pay, CertBtn}