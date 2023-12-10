import styled from 'styled-components';

const Container = styled.div`
  border-radius: 4rem 4rem 0rem 0rem;
  background-color: rgba(24, 33, 51, 0.6);
  backdrop-filter: blur(5px);
  color: rgba(75, 195, 241, 1);
  font-size: 14rem;
  padding: 6rem 10rem;
  min-height: 36rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderImage = styled.img`
  width: 24rem;
  height: 24rem;
`;

const HeaderTitle = styled.div`
  text-transform: uppercase;
  flex: 1;
  text-align: center;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default function Header(props: {title: string, image: string}) {
  return (
    <Container>
        <HeaderImage src={props.image} />
        <HeaderTitle>{props.title}</HeaderTitle>
    </Container>
  );
}