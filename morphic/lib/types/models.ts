export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
{
  id: 'gemini-1.5-pro-002',
  name: 'PATOOWORLD',
  provider: 'Create human-quality text, poems, codes, and many different kinds of creative content',
  providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-exp',
    name: '99PACE',
     provider: 'Speed and Efficiency: Prioritizes fast response times and low latency, it ideal for TASK',
     providerId: 'google'
    }
]
