import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  getCursos()
  {
    return [
      {id:1, nome:'Angular'},
      {id:2, nome:'Php'},
      {id:1, nome: 'java'}
    ]
  }
  getCurso(id: number)
  {
    let cursos = this.getCursos();
    for(let i of cursos)
    {
      let curso = i;
      if(curso.id == id)
      {
        return curso;
      }
    }
    return null;
  } 
  constructor() { }

}
