import styled from 'styled-components';

const Warning = styled.div`
  animation-timing-function: linear;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-name: c2vm-tle-notification-warning;
  border-radius: 3rem;
  padding: 8rem;
  display: flex;
  width: 100%;
`;

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  margin-right: 10rem;
`;

const Label = styled.div`
  color: rgba(217, 217, 217, 1);
  flex: 1;
`;

export default function Notification(props: MainPanelItemNotification) {
  return (
    props.notificationType == "warning" &&
    <Warning>
      <Image src="Media/Game/Icons/AdvisorNotifications.svg" />
      <Label>{props.label}</Label>
      <style>
        {`@keyframes c2vm-tle-notification-warning {
          to {
            background-color: rgba(200, 0, 0, 0.5);
          }
        }`}
      </style>
    </Warning>
  );
}