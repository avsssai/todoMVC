import React from 'react';

const Footer = (props) => {
    let {todos,chooseData} = props;
    let todosLeftToComplete = todos.filter(todo => {
        return !todo.completed
    });
  return(
    <div className="Footer">
        <div className="todos-left">{todosLeftToComplete.length} todos left</div>
        <div className="nav-buttons">
            <div className='all active' onClick={()=>chooseData("All")} >All</div>
            <div className="activeTodos" onClick={()=>chooseData("Active")}>Active</div>
            <div className="completed " onClick={()=>chooseData("Completed")}>Completed</div>
        </div>
    </div>
  )
}
export default Footer;