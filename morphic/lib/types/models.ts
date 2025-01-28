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
  provider: 'Functionality: The AI Assist is based on user’s choice as the AI continues Evolving for all purpose.',
  providerId: 'google'
  },
  {
    name: '99PACE AG',
     id: 'gemini-2.0-flash-exp',
     provider: 'completing tasks, engaging in conversations, creative content, translate languages, and summarize text.',
     provider: 'Gemini 1.5 and 2.0 Powered',
     providerId: 'google'
    }
]
