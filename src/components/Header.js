import styled from 'styled-components';
const Wrapper = styled.header`
  color: #fff;
  padding: 1rem;
  font-size: 2rem;
  font-weight: 800;
  position: fixed;
  width: 100%;
  text-align: center;
`;
export default function Header({ header }) {
  return <Wrapper className="idleHide">{header}</Wrapper>;
}
