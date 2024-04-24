import "./style.css";

export function PageTitle({ title }) {
  const titlePage = title;

  return (
    <header className="page-header">
      <h1 className="header-title">{titlePage}</h1>
    </header>
  );
}
