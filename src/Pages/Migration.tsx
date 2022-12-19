import { useState } from 'react'
import TableItemMigrations from "../components/TableItemMigrations"

const tableData = [
  { name: 'Greg. G', email: 'greg@mkt.gentrop.com', manager: 'Gentrop. G', status: 'Pendente', sincronizingDate: '21/06/2022' },
  { name: 'Greg. G', email: 'greg@mkt.gentrop.com', manager: 'Gentrop. G', status: 'Não migrado', sincronizingDate: '21/06/2022' },
  { name: 'Greg. G', email: 'greg@mkt.gentrop.com', manager: 'Gentrop. G', status: 'Migrado', sincronizingDate: '21/06/2022' },
  { name: 'Greg. G', email: 'greg@mkt.gentrop.com', manager: 'Gentrop. G', status: 'Migrado', sincronizingDate: '21/06/2022' },
]

const Migration = () => {
  const [active, setActive] = useState('Inbox')

  return (
    <>
      <section>
        <h1>Migração</h1>
        <h2 className="mb-8">Visualização de contas</h2>
        <div className='w-2/5'>
          <input type='text' placeholder="Buscar" />
        </div>
      </section>

      <section className="mt-10 pb-20">
        <ul className="flex gap-2">
          <li className={`tab 
          ${active === 'Inbox'
              ? 'tab--active'
              : 'tab--inactive'}`
          }
            onClick={({ currentTarget }) => setActive(currentTarget.innerText)}>Inbox</li>

          <li className={`tab 
          ${active === 'My Drive'
              ? 'tab--active'
              : 'tab--inactive'}`
          }
            onClick={({ currentTarget }) => setActive(currentTarget.innerText)}>My Drive</li>
        </ul>

        <div className="p-10 flex justify-between items-center shadow shadow-gray-200">
          <p>Veja abaixo as contas que terão o <strong>{active}</strong> migrado.</p>
          <select className='w-2/5'>
            <option value="" disabled selected hidden>Ordenar por</option>
            <option value="Ultima atualização de status e sincronização">Ultima atualização de status e sincronização</option>
            <option value="Ordem alfabética">Ordem alfabética</option>
            <option value="Do mais antigo ao mais novo">Do mais antigo ao mais novo</option>
            <option value="Do mais novo ao mais antigo">Do mais novo ao mais antigo</option>
          </select>
        </div>
        <section>
          <table>
            <thead>
              <tr>
                <th className="rounded-l-lg">Nome</th>
                <th>E-mail</th>
                <th>Gestor</th>
                <th>Status</th>
                <th className="rounded-r-lg" colSpan={2}>Sincronizado em</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(item => (
                <TableItemMigrations name={item.name} email={item.email} manager={item.manager} status={item.status} sincronizingDate={item.sincronizingDate} />
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </>
  )
}

export default Migration