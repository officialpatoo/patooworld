export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
{
  name: 'PATOOWORLD',
  id: 'gemini-1.5-pro-002',
  provider: 'Google Gen AI',
  providerId: 'google'
  },
  {
    name: 'PATOOWORLD 99PACE',
     id: 'gemini-2.0-flash-exp',
     provider: 'Google Gen AI',
     providerId: 'google'
    }
]
