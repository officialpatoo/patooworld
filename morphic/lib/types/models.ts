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
  provider: 'Core Functionality: The AI Assist is based on user’s choice and for all purpose',
  providerId: 'google'
  },
  {
    name: '99PACE AG',
     id: 'gemini-2.0-flash-exp',
     provider: 'Speed and Efficiency text, images, chat, imagination image generation, search engine, and SEO',
     providerId: 'google'
    },
   {
    name: '',
     id: 'gemini-2.0-flash',
     provider: 'Gemini 1.5 and 2.0 Powered',
     providerId: 'google'
    }
]
