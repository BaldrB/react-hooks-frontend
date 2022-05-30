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
                    <Link className='btn btn-info' to={`/dorama`} style = {{marginLeft:"10px"}}>Дорама</Link>
                    <Link className='btn btn-info' to={`/tagdorama`} style = {{marginLeft:"10px"}}>Дорама Таг</Link>
                    <Link className='btn btn-info' to={`/doramas`} style = {{marginLeft:"10px"}}>Дорамы все</Link>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent