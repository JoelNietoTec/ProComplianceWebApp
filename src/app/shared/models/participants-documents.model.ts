import { DocumentType } from '../models/document-types.model';

export interface ParticipantsDocument {
  ID: number;
  DocumentTypeID: number;
  DocumentCode: string;
  ExpeditionDate?: Date;
  ExpirationDate?: Date;
  FilePath?: string;
}
