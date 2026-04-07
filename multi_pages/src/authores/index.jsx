import authors from "../../data/authors";
import AuthorCard from "../../components/AuthorCard";

function Autores() {
  return (
    <div className="container">
      <h1>Autores</h1>

      <div className="cards">
        {authors.map((author) => (
          <AuthorCard
            key={author.id}
            nome={author.nome}
            descricao={author.descricao}
            imagem={author.imagem}
          />
        ))}
      </div>
    </div>
  );
}

export default Autores;