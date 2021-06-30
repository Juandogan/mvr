import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(value: any[], texto:string ): any[] {
    if(!texto) return value
    return value.filter(match => match.titulo.toUpperCase().includes(texto.toUpperCase()) ||
    match.categoria.toUpperCase().includes(texto.toUpperCase())
    ||
    match.subtitulo.toUpperCase().includes(texto.toUpperCase())
    ||
    match.descripcion1.toUpperCase().includes(texto.toUpperCase())


  )

  }

}
