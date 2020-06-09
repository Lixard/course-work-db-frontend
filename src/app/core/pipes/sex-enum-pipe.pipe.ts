import {Pipe, PipeTransform} from '@angular/core';
import {Sex} from "../models/patient.model";

@Pipe({
  name: 'sexEnumPipe'
})
export class SexEnumPipePipe implements PipeTransform {

  transform(value: Sex): string | undefined {
    if (value === null) {
      return undefined;
    }
    switch (value) {
      case Sex.MALE:
        return 'Мужской';
      case Sex.FEMALE:
        return 'Женский';
      case Sex.UNDEFINED:
        return 'Неизвестно';

    }
  }

}
