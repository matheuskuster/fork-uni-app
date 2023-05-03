import { useQuery } from '@tanstack/react-query';

import { institutionService } from '@/services/institutions-service';

interface Institution {
  id: string;
  name: string;
  acronym: string | null;
  logo: string | null;
  type: 'university' | 'school' | 'business';
  address: Address;
}

interface Address {
  id: string;
  city: string;
  complement: string | null;
  neighborhood: string;
  number: string;
  state: string;
  street: string;
  formated: string;
  zipCode: string;
}

export function useInstitutions() {
  return useQuery({
    queryKey: ['institutions'],
    queryFn: fetchInstitutions,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}

async function fetchInstitutions() {
  const response = await institutionService.get<Institution[]>('/v1');

  return response.data;
}
