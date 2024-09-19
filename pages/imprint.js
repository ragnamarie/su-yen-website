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
        <b>Impressum</b>
        <br></br>
        <br></br>
        Su-Yen Hennings<br></br> Dresdener Straße 119<br></br> 10999 Berlin
        <br></br>
        <br></br>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br></br>
        Su-Yen Hennings<br></br>
        <br></br>
        <b>Urheberinnenrecht</b>
        <br></br>
        <br></br>Die durch die Seitenbetreiberin erstellten Inhalte und Werke
        auf dieser Website unterliegen dem deutschen Urheberrecht. Beiträge
        Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der
        jeweiligen Urheberin bzw. Erstellerin. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Sollten Sie auf dieser Website Inhalte finden, die Ihre Urheberrechte
        verletzen, bitten wir um einen entsprechenden Hinweis.
        <br></br>
        <br></br>
        <b>Datenschutzerklärung</b>
        <br></br>
        <br></br>1. Verantwortlichee für die Datenverarbeitung Verantwortlicher
        im Sinne der Datenschutz-Grundverordnung (DSGVO) ist: <br></br>
        <br></br>
        Su-Yen Hennings<br></br> Dresdener Straße 119<br></br> 10999 Berlin
        <br></br>
        <br></br>2. Erhebung und Verarbeitung von personenbezogenen Daten{" "}
        <br></br>
        <br></br>Wir erheben und verarbeiten personenbezogene Daten nur, wenn
        dies gesetzlich erlaubt ist oder Sie in die Erhebung und Verarbeitung
        eingewilligt haben. Personenbezogene Daten sind Informationen, die Ihnen
        zugeordnet werden können, z.B. Name, Adresse, E-Mail-Adresse und
        Telefonnummer. <br></br>
        <br></br>3. Zwecke der Datenverarbeitung <br></br>
        <br></br>Wir verarbeiten Ihre personenbezogenen Daten zu folgenden
        Zwecken: Zur Beantwortung von Kontaktanfragen. Zur Erfüllung von
        Verträgen, die mit Ihnen geschlossen werden. <br></br>
        <br></br>4. Datenweitergabe an Dritte<br></br>
        <br></br> Ihre personenbezogenen Daten werden nicht an Dritte
        weitergegeben, es sei denn, dies ist zur Erfüllung eines Vertrages
        erforderlich oder gesetzlich vorgeschrieben.<br></br>
        <br></br> 5. Speicherdauer<br></br>
        <br></br> Wir speichern Ihre personenbezogenen Daten nur so lange, wie
        dies für die Erfüllung der jeweiligen Zwecke erforderlich ist oder wie
        es gesetzliche Aufbewahrungsfristen vorsehen.<br></br>
        <br></br> 6. Ihre Rechte Sie haben folgende Rechte bezüglich Ihrer
        personenbezogenen Daten: <br></br>
        <br></br>Recht auf Auskunft: Sie können von uns Auskunft darüber
        verlangen, welche Daten wir über Sie gespeichert haben. <br></br>
        <br></br>Recht auf Berichtigung: Sie können die Berichtigung falscher
        oder unvollständiger Daten verlangen. <br></br>
        <br></br>Recht auf Löschung: Unter bestimmten Umständen können Sie die
        Löschung Ihrer personenbezogenen Daten verlangen. <br></br>
        <br></br>Recht auf Einschränkung der Verarbeitung: Sie können unter
        bestimmten Umständen die Einschränkung der Verarbeitung Ihrer Daten
        verlangen. <br></br>
        <br></br>Recht auf Datenübertragbarkeit: Sie können die Übertragung
        Ihrer Daten an einen anderen Verantwortlichen verlangen. <br></br>
        <br></br>Recht auf Widerspruch: Sie können der Verarbeitung Ihrer Daten
        unter bestimmten Umständen widersprechen. <br></br>
        <br></br>Zur Ausübung dieser Rechte können Sie uns über die oben
        angegebenen Kontaktdaten erreichen. <br></br>
        <br></br>7. Datensicherheit <br></br>
        <br></br>Wir treffen angemessene technische und organisatorische
        Maßnahmen, um Ihre personenbezogenen Daten vor Verlust, Zerstörung,
        Manipulation und unbefugtem Zugriff zu schützen. <br></br>
        <br></br>8. Cookies <br></br>
        <br></br>Auf unserer Website verwenden wir keine Cookies oder andere
        Tracking-Technologien. Sollten wir in Zukunft Cookies einsetzen, werden
        wir Sie darüber informieren und gegebenenfalls um Ihre Zustimmung
        bitten. <br></br>
        <br></br>9. Änderungen der Datenschutzerklärung<br></br>
        <br></br>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu
        ändern, um sie an geänderte rechtliche Rahmenbedingungen oder Änderungen
        unserer Datenverarbeitung anzupassen. Die aktuelle Datenschutzerklärung
        finden Sie immer auf unserer Website. <br></br>
      </StyledImprintText>
    </>
  );
}
