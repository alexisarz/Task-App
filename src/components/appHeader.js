import React from 'react';


function AppHeader(props){
    return(
        <h3 className="bg-primary text-white text-center p-4 mb-1">
            Tenés {props.taskleft} tareas por hacer!
        </h3>
    )
}

export default AppHeader;