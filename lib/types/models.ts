export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
{
  name: 'PATOOWORLD AI',
  id: 'gemini-1.5-pro-002',
  provider: 'Gemini-Powered',
  providerId: 'google'
  },
  {
    name: '99PACE',
     id: 'gemini-2.0-flash-exp',
     provider: 'Gemini-Powered',
     providerId: 'google'
    }
]
