import {useState} from 'react'
export default function Player({initialName,symbol,isActive,onChangeName}){
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing,setIsEditing] = useState(false);
    function handleNameChange(event){
        setPlayerName(event.target.value);
    }
    function handleEditClick (){
        // setIsEditing(isEditing?false:true);
        // if initial value is false
        // here both of them considers same value at a time 
        // setIsEditing(!isEditing) // if written it takes time to change value true
        // setIsEditing(!isEditing) // if written it takes time to change value true

        // therefore to use this instead
        setIsEditing(editing=>!editing);
        // if written twice it will change instantly and pass true to next one
        if(isEditing){
            onChangeName(symbol,playerName);
        }

    }
    
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if(isEditing){
        editablePlayerName = <input type='text' value={playerName} onChange={handleNameChange}/>
    }
    return(
        <li className={isActive?'active':undefined}>
            <span className='player'>
            {editablePlayerName}
            <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
        </li>
    );
}