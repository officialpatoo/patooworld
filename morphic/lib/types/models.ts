export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
{
  id: 'gemini-1.5-pro-002',
  name: 'PATOO ASSIST',
  provider: 'Create human-quality text, write different kinds of creative content',
  providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-exp',
    name: '99PACE AI',
     provider: 'Speed and Efficiency: Prioritizes fast response times and low latency, making it ideal for time-sensitive and high-frequency tasks',
    providerId: 'google'
    },
    {
      id: 'gemini-2.0-flash-thinking-exp-01-21',
      name: 'PATOOPACE ASSIST',
      provider: 'Create human-quality text',
      providerId: 'google'
      }
]
