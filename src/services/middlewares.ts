import { applyInstitutionServiceToken } from './institutions-service';

export function applyBearerToken(token: string) {
  applyInstitutionServiceToken(token);
}
