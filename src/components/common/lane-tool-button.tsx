import styled from 'styled-components';

const Button = styled.div`
  padding: 3rem;
  border-radius: 3rem;
  background-color: var(--panelColorNormal);
`;

const Image = styled.img`
  width: 28rem;
  height: 28rem;
`;

export default function LaneToolButton() {
  return (
    <Button>
      <Image src="Media/Game/Icons/RoadsServices.svg" />  
    </Button>
  );
}