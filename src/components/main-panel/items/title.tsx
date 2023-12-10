import styled from 'styled-components';

const Container = styled.div``;

export default function Title(props: MainPanelItemTitle) {
  return (
    <Container>
      {props.title}
    </Container>
  );
}