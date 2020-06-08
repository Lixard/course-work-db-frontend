import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sexPipe'
})
export class SexPipePipe implements PipeTransform {

  transform(value: string): string | undefined {
    if (value === null) {
      return undefined;
    }
    switch (value) {
      case 'FEMALE':
        return 'Женский';
      case 'MALE':
        return 'Мужской';
      case 'UNDEFINED':
        return 'Неизвестно';
    }
  }

}
