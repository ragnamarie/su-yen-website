import styled from "styled-components";
import ContactForm from "../ContactForm";

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding-right: 40px;
`;

const StyledListItem = styled.li`
  font-weight: 700;
  font-size: 20px;
`;

export default function Contacts({ contacts }) {
  return (
    <>
      <StyledList>
        <StyledListItem>
          <u>💱phone</u> {contacts.phone}
        </StyledListItem>
        <StyledListItem>
          <u>💱mail</u> {contacts.mail}
        </StyledListItem>
        <StyledListItem>
          <u>💱insta</u> {contacts.instagram}
        </StyledListItem>
        <StyledListItem>
          <u>💱tiktok</u> {contacts.tiktok}
        </StyledListItem>
      </StyledList>
      <ContactForm contacts={contacts} />
    </>
  );
}
