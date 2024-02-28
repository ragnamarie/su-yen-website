export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>SU-YEN HENNINGS</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          <small>su-yen hennings&copy;</small>
        </p>
      </footer>
    </>
  );
}
