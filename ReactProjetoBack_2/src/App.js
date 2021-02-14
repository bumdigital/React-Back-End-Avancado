import React from 'react';


// COMPONENTES RENDERIZADO NO SERVIDOR E FRONT END
// *********"MENSAGEM 1" E "MENSAGEM 2" SÃO RENDERIZADAS NO SERVIDOR*********
// *********"MENSAGEM 3" E "MENSAGEM 4" SÃO RENDERIZADAS NO FRONT END********
export default function AppComponent(props) {
  function excluirComentario(comentarioId) {
    console.log(comentarioId);
  }

  return (
    <>
      <h3>Excluindo mensagens</h3>
      <hr />
      <ul>
        {props.comentarios.map(comentario => (
          <li key={comentario.id}>
            <span>{comentario.name} - {comentario.message}</span>
            <button type="button" onClick={() => excluirComentario(comentario.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </>
  )
}