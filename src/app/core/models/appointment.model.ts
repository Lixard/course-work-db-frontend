import {Drug} from "./drug.model";
import {Diagnosis} from "./diagnosis.model";

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
  patient: SimpleEntity,
  doctor: SimpleEntity,
  place: string,
  appointmentDate: string,
  symptoms: string,
  diagnoses: Diagnosis[],
  drugs: Drug[]
}

export interface SimpleEntity {
  id: number,
  lastName: string
}
