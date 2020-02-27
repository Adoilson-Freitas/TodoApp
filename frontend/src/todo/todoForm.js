import React from 'react'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div className='form'>
            <div className='form-group'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}></input>
            </div>
            <div>
                <button className='btn btn-primary' onClick={props.handleAdd}>➕</button>
                <button className='btn btn-info' onClick={props.handleSearch}>🔍</button>
                <button className='btn btn-default' onClick={props.handleClear}>❌</button>
            </div>
        </div>
    )
}