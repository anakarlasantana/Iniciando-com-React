import React, {useState, useEffect} from 'react'; // useState é um Hook//

import './styles.css';

import { Card } from '../../componentes/Card';

export function Home() {
  const [studentName, setStudantName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''});

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        name: setStudantName,
        time: new Date().toLocaleTimeString("pt-br", {
          hour:'2-digit',
          minute: '2-digit',
          second:'2-digit', 
        })

      })
    };

    setStudents(prevState => [...prevState, newStudent]); //Substituindo o conteúdo //
  }

  useEffect(() => {
    fetch('https://api.github.com/users/anakarlasantana')// corpo do useEffect -> são as ações na hora da execusão;
    .then(response => response.json())
    .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
    });
  }, []);

  return (
    <div className='container'> {/* Esse lemento também pode ser embrulhado com uma div ou <>...</> */}
    <header>
    <h1>Lista de Presença</h1>
    <div>
      <strong>{user.name}</strong>
      <img src={user.avatar} alt="Foto de perfil"/>
    </div>
    </header>
    <input 
    type="text" 
    placeholder="Digite o nome..." 
    onChange={e =>setStudantName(e.target.value)}
    />

    <button type="button"onClick={handleAddStudent} >Adicionar</button>

    {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time}
      />))}
    
    </div>
    
  );
}

