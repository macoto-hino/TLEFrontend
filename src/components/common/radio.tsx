import styled from 'styled-components';

const Circle = styled.div`
  border: 2px solid rgba(75, 195, 241, 1);
  margin: 0 10rem 0 0;
  width: 20rem;
  height: 20rem;
  padding: 3px;
  border-radius: 50%;
`;

const Bullet = styled.div<{isChecked: boolean}>`
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: ${props => props.isChecked ? 1 : 0};
  border-radius: 50%;
`;

export default function Radio(props: {isChecked: boolean}) {
  return (
    <Circle>
      <Bullet isChecked={props.isChecked} />
    </Circle>
  );
}