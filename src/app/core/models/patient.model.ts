export interface Patient {
  patientId: number,
  lastName: string,
  firstName: string,
  secondName: string,
  sex: Sex,
  birthday: string,
  policy: number,
  serialPassport: number,
  numberPassport: number
}

export enum Sex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  UNDEFINED = 'UNDEFINED'
}
