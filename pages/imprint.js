import styled from "styled-components";

const StyledImprintText = styled.div`
  white-space: pre-line; /* Preserve line breaks */
  margin-right: 20px;
  padding-bottom: 20px;
  width: 50%;
  display: block;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export default function ImprintPage() {
  return (
    <>
      <StyledImprintText>
        Angaben gemäß § 5 TMG: <br></br>
        <br></br>Max Mustermann<br></br>Musterstraße 1<br></br>12345 Musterstadt
        <br></br>Deutschland<br></br>
        <br></br>
        Vertreten durch:<br></br>Max Mustermann<br></br>
        <br></br>Kontakt:<br></br>Telefon: +49 (0)123 456789<br></br>E-Mail:
        info@musterfirma.de<br></br>
        <br></br>Registereintrag:<br></br>Eintragung im Handelsregister.
        <br></br>
        Registergericht: Amtsgericht Musterstadt<br></br>Registernummer: HRB
        12345<br></br>
        <br></br>
        Umsatzsteuer-ID: Umsatzsteuer-Identifikationsnummer gemäß §27 a<br></br>
        Umsatzsteuergesetz: DE 123456789<br></br>
        <br></br>Aufsichtsbehörde:<br></br>Berufsaufsichtsbehörde Musterstadt
        <br></br>
        <br></br>
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br></br>Max
        Mustermann<br></br>Musterstraße 1<br></br>12345 Musterstadt<br></br>
        Deutschland<br></br>
        <br></br>Haftungsausschluss:<br></br>Haftung für Inhalte<br></br>Die
        Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen.
      </StyledImprintText>
    </>
  );
}
