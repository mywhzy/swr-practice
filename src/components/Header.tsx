import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/images/Lion.svg';
import { TabBar } from './TabBar';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <InnerContainer>
        <Logo onClick={() => navigate('/')} />
        <TabBar />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
  height: 70px;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  max-width: 1200px;
  width: 100%;
  align-self: stretch;
`;