export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
{
  id: 'gemini-1.5-pro-002',
  provider: 'Gemini 1.5 pro (Choice)',
  name: 'PATOOWORLD PA',
  providerId: 'google'
  },
  {
  id: 'gemini-2.0-flash-exp',
  provider: 'Gemini Flash (Speed and Efficiency)',
  name: '99PACE AG',
  providerId: 'google'
  }
]
