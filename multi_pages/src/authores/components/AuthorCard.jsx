function AuthorCard({ nome, descricao, imagem }) {
  return (
    <div className="author-card">
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>{descricao}</p>
    </div>
  );
}

export default AuthorCard;