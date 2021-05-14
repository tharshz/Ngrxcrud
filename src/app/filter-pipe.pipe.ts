import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(course1: [], searchText:string): any {

    if(!course1) return [];
    if(!searchText) return course1;

    searchText = searchText.toLowerCase();

    return course1.filter((cour:any) => {

      return cour.name.toLowerCase().includes(searchText) ||  cour.description.toLowerCase().includes(searchText) 
    });
  }

}
