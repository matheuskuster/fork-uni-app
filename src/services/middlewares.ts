import { applyInstitutionServiceToken } from './institutions-service';
import { applyUniServiceToken } from './uni-service';

export function applyBearerToken(token: string) {
  applyInstitutionServiceToken(token);
  applyUniServiceToken(token);
}
