import React, { useState, useEffect } from 'react'
import { MdPlaylistAdd } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
// import { RiCheckboxBlankLine } from 'react-icons/ri'
import FlipMove from 'react-flip-move'

import './styles.css'

const TodoList = () => {

  const [changeName, setChangeName] = useState('')
  const [listTask, setListTasks] = useState([])

  useEffect(() => {
    const counter = listTask.length

    document.title = `(${counter}) Todo-List`
  }, [listTask.length])



  // ? Pegando o valor do input
  function handleTakeChangeName(event) {
    const value = event.target.value

    setChangeName(value)

  }


  function enterKey(event) {
    if (event.keyCode === 13) {
      handleAddNameToList()
    }
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

  // function handleCheckedListTask(event) {
  //   check(event)
  // }

  function check(event) {
    const element = event.target



    if (element.classList.contains('checked')) {
      return event.target.classList.remove('checked')


    } else {
      return event.target.classList.add('checked')

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
        <div className="list"  >
          <ul >
            <FlipMove
              duration={300} easing='ease-in-out'>

              {listTask.map((task, index) => (

                <div className='list-single' draggable={true} key={index}>
                  {/*  <RiCheckboxBlankLine className='icon-check' onClick={() => handleCheckedListTask} /> */}
                  <p onClick={check} >{task}</p>
                  <div className="icons">

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

