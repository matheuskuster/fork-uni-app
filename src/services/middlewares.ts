import { applyAuthServiceToken } from './auth-service';
import { applyInstitutionServiceToken } from './institutions-service';
import { applyUniServiceToken } from './uni-service';

export function applyBearerToken(token: string) {
  applyAuthServiceToken(token);
  applyInstitutionServiceToken(token);
  applyUniServiceToken(token);
}
