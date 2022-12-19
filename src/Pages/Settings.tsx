const Settings = () => {
  return (
    <>
      <h1 className="mb-6">Configurações</h1>
      <section className="grid grid-cols-[200px_1fr_1fr] gap-8 bg-gray-100 px-10 py-10 rounded-lg shadow-md shadow-gray-200 mb-6">
        <h2 className="font-bold">Configurações gerais da aplicação</h2>
        <div className="flex flex-col">
          <h3 className="font-bold">Workspace Admin Subject</h3>
          <p className="mb-5">Insira ou edite o e-mail do Workspace Admin Subject</p>
          <input type="text" placeholder="email@email.com" />
        </div>

        <div>
          <h3 className="font-bold">Caminho</h3>
          <p className="mb-5">Insira ou edite o caminho para localizar os gestores</p>
          <input type="text" placeholder='workspace/groups/admin' />
        </div>
      </section>

      <section className="grid grid-cols-[200px_1fr_1fr] grid-rows-2 gap-8 px-10 py-10 rounded-lg shadow-md shadow-gray-200">
        <h2 className="font-bold">Configurações dos processos de migração</h2>
        <div className="flex flex-col">
          <h3 className="font-bold">Quarentena</h3>
          <p className="mb-5">Insira ou edite o e-mail do Workspace Admin Subject</p>

          <div className="flex items-center">
            <input className="w-14" type="text" placeholder="7" />
            <p className="ml-3 text-gray-300"> dias.</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold">E-mail fallback</h3>
          <p className="mb-5 ">Adicione uma conta fallback (usuários que não possuírem gestores serão migrados para a conta informada)</p>
          <input type="text" placeholder='workspace/groups/admin' />
        </div>

        <div className="col-start-2">
          <h3 className="font-bold">Processo de sincronização</h3>
          <p className="mb-5 ">Selecione abaixo qual o tipo de processo entre Grupo ou Unidade Organizacional</p>
          <select>
            <option value="Unidade organizacional">Unidade organizacional</option>
          </select>
        </div>

        <div className="flex flex-col">
          <h3 className="font-bold">Processo de movimentação</h3>
          <p className="mb-5">Selecione abaixo qual o tipo de processo entre Grupo ou Unidade Organizacional</p>
          <select>
            <option value="Unidade organizacional">Unidade organizacional</option>
          </select>
        </div>
      </section>

      <div className="flex justify-center p-10 gap-10">
        <button className="btn btn--danger">CANCELAR</button>
        <button className="btn btn--success">SALVAR</button>
      </div>
    </>
  )
}

export default Settings