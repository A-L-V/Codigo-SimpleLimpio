import React from 'react';
import './App.css';
import {TodoContext} from '../Componentes/TodoContext';
import {TodoCounter} from '../Componentes/TodoCounter.js';
import {TodoSearch} from '../Componentes/TodoSearch.js';
import {TodoList} from '../Componentes/TodoList.js';
import {TodoItem} from '../Componentes/TodoItem.js';
import {TodoCreateButton} from '../Componentes/TodoCreateButton.js';
import {Modal} from '../Modal/index';
import {TodoForm} from '../Componentes/TodoForm.js';




function AppUI() {
    const {
      error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);
  
    return (
      <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
        <TodoCreateButton
          setOpenModal={setOpenModal}
        />
        {!!openModal && <Modal>
          <TodoForm/>
        </Modal>}

      </React.Fragment>
    );
  }
  export {AppUI};
  
  