import React, { useState, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import { MdPlaylistAdd } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
// import { RiCheckboxBlankLine } from 'react-icons/ri'
import FlipMove from 'react-flip-move'

import './styles.css'

const TodoList = () => {

  const item = localStorage.getItem("listTask")

  function init() {
    return (item != null && item !== "") ? JSON.parse(item) : []

  }

  const [changeName, setChangeName] = useState('')
  const [listTask, setListTasks] = useState(init())

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

  function updateStorage(listTask) {
    localStorage.setItem("listTask", JSON.stringify(listTask))
  }

  // ? Adicionando valor a listTassk
  function handleAddNameToList(event) {
    const newListTasks = listTask.slice()
    newListTasks.push({
      name: changeName,
      checked: ""
    })
    let exist = false;
    if (changeName === '') return alert('Name is Void')
    listTask.forEach(element => {
      if (element.name.includes(changeName)) {
        exist = true
        return alert('Task exist')
      }
    });

    if (!exist) {
      updateStorage(newListTasks)
      setListTasks(newListTasks)
    }

  }

  // ? Deletando um item da listTask
  function handleDeleteFromList(index) {
    const newListTasks = listTask.slice()
    newListTasks.splice(index, 1)
    updateStorage(newListTasks)
    setListTasks(newListTasks)
  }

  // function handleCheckedListTask(event) {
  //   check(event)
  // }

  function check(index) {

    const element = document.getElementById(index)

    let updateList = listTask
    if (element.classList.contains('checked')) {
      updateList[index].checked = "";
      setListTasks(updateList)

      updateStorage(updateList)
      return element.classList.remove('checked')

    } else {
      updateList[index].checked = "checked";
      setListTasks(updateList)
      updateStorage(updateList)
      return element.classList.add('checked')
    }

  }

  function handleUpdateInput(ind, event) {

    const newListTasks = listTask.slice()

    console.log(event.target.value)



  }

  return (
    <div className='todo'>

      <div className="todo-list bg-todo-list">
        <div className="input-icon">
          <input className='input-add'
            type="text"
            placeholder='Digite sua tarefa'
            onKeyDown={enterKey}
            onChange={handleTakeChangeName}
          />


          <MdPlaylistAdd
            className='icon-send'
            onClick={handleAddNameToList}
          />
        </div>


        <p className='count-tasks'>
          {`Tasks: ${listTask.length} `}
        </p>


        <div className="list">


          <Scrollbars style={{ height: 400 }}>
            <ul >

              <FlipMove
                duration={500}
                easing='ease-in-out'
              >

                {listTask.map((task, index) => (

                  <div
                    className='list-single'
                    key={index}
                  >


                    <p id={index} className={task.checked} onClick={() => check(index)}>{task.name}</p>


                    <div className="icons">

                      <BsTrash className='icon-trash' onClick={() => handleDeleteFromList(index)} />
                    </div>
                  </div>
                ))}

              </FlipMove>

            </ul>
          </Scrollbars>

        </div>


      </div>

    </div>
  )
}


export default TodoList

