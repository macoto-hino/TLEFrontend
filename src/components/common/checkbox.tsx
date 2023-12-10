import styled from 'styled-components';

const Box = styled.div`
  margin: 0 10rem 0 0;
  width: 20rem;
  height: 20rem;
  padding: 1px;
  border: 2px solid rgba(255, 255, 255, 0.500000);
  border-radius: 3rem;
`;

const Checkmark = styled.div<{isChecked: boolean}>`
  width: 100%;
  height: 100%;
  mask-size: 100% auto;
  background-color: white;
  opacity: ${props => props.isChecked ? 1 : 0};
`;

export default function Checkbox(props: {isChecked: boolean}) {
  return (
    <Box>
      <Checkmark isChecked={props.isChecked} style={{maskImage: "url(Media/Glyphs/Checkmark.svg)"}} />
    </Box>
  );
}