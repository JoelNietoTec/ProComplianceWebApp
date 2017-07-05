import { Gender } from './genders.model';

export interface Participant {
  ID?: number;
  Code?: string;
  FirstName?: string;
  SecondName?: string;
  ThirdName?: string;
  FourthName?: string;
  GenderID?: number;
  Gender?: Gender;
  BirthDate?: Date;
  ParticipantTypeID?: number;
  ParticipantType?: ParticipantType;
}

export interface ParticipantType {
  ID?: number;
  Name?: string;
  EnglishName?: string;
}
