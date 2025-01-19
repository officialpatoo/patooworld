export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-1.5-pro-002',
    name: 'PatooWorld Assistant',
    provider: 'Gemini',
    providerId: 'google'
  }
]
