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
  provider: 'Paradox Of Choice.',
  providerId: 'google'
  },
  {
    name: '99PACE',
     id: 'gemini-2.0-flash-exp',
     provider: 'Speed and Efficiency',
     providerId: 'google'
    }
]
