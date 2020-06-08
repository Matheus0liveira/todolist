import React, { useState } from 'react'
import { MdPlaylistAdd } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { RiCheckboxBlankLine } from 'react-icons/ri'
import FlipMove from 'react-flip-move'

import './styles.css'

const TodoList = () => {

  const [changeName, setChangeName] = useState('')
  const [listTask, setListTasks] = useState([])


  // ? Pegando o valor do input
  function handleTakeChangeName(event) {
    const value = event.target.value

    setChangeName(value)

  }



  // ? Adicionando valor a listTassk
  function handleAddNameToList(event) {
    const newListTasks = listTask.slice()
    newListTasks.push(changeName)


    if (changeName === '') return alert('Name is Void')
    if (listTask.includes(changeName)) return alert('Task exist')

    setListTasks(newListTasks)
  }

  // ? Deletando um item da listTask
  function handleDeleteFromList(index) {
    const newListTasks = listTask.slice()
    newListTasks.splice(index, 1)
    setListTasks(newListTasks)
  }

  function handleCheckedListTask(index) {
    const value = document.getElementsByClassName('value')
    console.log(value)
  }
  function enterKey(event) {
    if (event.keyCode === 13) {
      handleAddNameToList()
    }
  }

  return (
    <div className='todo'>

      <div className="todo-list bg-todo-list">
        <div className="input-icon">
          <input className='input-add' type="text" placeholder='Digite sua tarefa' onKeyDown={enterKey} onChange={handleTakeChangeName} />
          <MdPlaylistAdd className='icon-send' onClick={handleAddNameToList} />
        </div>
        <p className='count-tasks'>{`Tasks: ${listTask.length} `}</p>
        <div className="list">
          <ul >
            <FlipMove
              staggerDelayBy={150} duration={300} enterAnimation="accordionVertical" leaveAnimation="accordionVertical">
              {listTask.map((task, index) => (

                <div className='list-single' key={index}>
                  <p >{task}</p>
                  <div className="icons">
                    <RiCheckboxBlankLine className='icon-check' onClick={() => handleCheckedListTask(index)} />
                    <BsTrash className='icon-trash' onClick={() => handleDeleteFromList(index)} />
                  </div>
                </div>
              ))}
            </FlipMove>



          </ul>
        </div>

      </div>

    </div>
  )
}


export default TodoList

