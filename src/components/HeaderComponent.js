import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href='https://javaguides.net' className='navbar-brand'>
                        Employee Management Application
                    </a>
                    <Link className='btn btn-info' to={`/`} >Employee</Link>
                    <Link className='btn btn-info' to={`/perco`} style = {{marginLeft:"10px"}}>perco</Link>
                    <Link className='btn btn-info' to={`/as`} style = {{marginLeft:"10px"}}>Сотрудники</Link>
                    <Link className='btn btn-info' to={`/sklad`} style = {{marginLeft:"10px"}}>PC</Link>
                    <Link className='btn btn-info' to={`/group`} style = {{marginLeft:"10px"}}>Подразделение</Link>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent