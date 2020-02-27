import React from 'react'
export default props => {

const renderRows = () => {

    const list = props.list || []
      return list.map(todo => (
        <tr key={todo._id}>
           <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
              <td>
                <button className='btn btn-default' onClick={() => props.handleMarkAsDone(todo)}>✔</button>
                <button className='btn btn-default' onClick={() => props.handleMarkAsPending(todo)}>🔁</button>
                <button className='btn btn-default' onClick={() => props.handleRemove(todo)}>🗑</button>
              </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}