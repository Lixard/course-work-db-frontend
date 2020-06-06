export interface Appointment {
  appointmentId: number,
  patientId: number,
  doctorId: number,
  place: string,
  appointmentDate: string,
  symptoms: string
}

export interface ComplicatedAppointment {
  appointmentId: number,
  patientId: number
  patient: SimpleEntity,
  doctor: SimpleEntity,
  place: string,
  appointmentDate: string,
  symptoms: string
}

export interface AppointmentTableModel {
  appointmentId: number,
  patientId: number
  patientLastName: string,
  doctorId: number,
  doctorLastName: string,
  place: string,
  appointmentDate: string,
  symptoms: string
}

export interface SimpleEntity {
  id: number,
  lastName: string
}
