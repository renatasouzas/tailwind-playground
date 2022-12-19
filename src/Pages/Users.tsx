import TableItemUsers from '../components/TableItemUsers'

const tableData = [
  { name: 'Greg. G', email: 'greg@mkt.gentrop.com', manager: 'Gentrop. G', status: 'Pendente', sincronizingDate: '21/06/2022' },
  { name: 'Greg. G', email: 'greg@mkt.gentrop.com', manager: 'Gentrop. G', status: 'Não migrado', sincronizingDate: '21/06/2022' },
  { name: 'Greg. G', email: 'greg@mkt.gentrop.com', manager: 'Gentrop. G', status: 'Migrado', sincronizingDate: '21/06/2022' },
  { name: 'Greg. G', email: 'greg@mkt.gentrop.com', manager: 'Gentrop. G', status: 'Migrado', sincronizingDate: '21/06/2022' },
]

const Users = () => {
  return (
    <section className='pb-20'>
      <h1>Gerenciamento de usuários</h1>
      <h2 className="mb-8">Edite as informações dos usuários da aplicação.</h2>
      <h3 className='font-bold mb-3'>Adicionar usuário</h3>

      <div className='flex gap-4'>
        <input className='w-1/5' type='text' placeholder="email@email.com" />
        <button className='btn btn--success'>ADICIONAR</button>
      </div>

      <h3 className='font-bold mt-8 mb-3'>Gerenciar acessos</h3>
      <div className='flex justify-between gap-80 mb-5'>
        <input type='text' placeholder="Buscar usuários" />
        <select>
          <option value="" disabled selected hidden>Ordenar por</option>
          <option value="Utima atualização de status">Utima atualização de status</option>
        </select>
      </div>

      <section>
        <table>
          <thead>
            <tr>
              <th className="rounded-l-lg">Nome</th>
              <th>E-mail</th>
              <th className="rounded-r-lg" colSpan={2}>Status do usuário</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map(item => (
              <TableItemUsers name={item.name} email={item.email} status={item.status} />
            ))}
          </tbody>
        </table>
      </section>
    </section>
  )
}

export default Users