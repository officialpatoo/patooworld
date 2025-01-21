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
  provider: '',
  providerId: 'google'
  },
 {
  id: 'gemini-2.0-flash-exp',
  name: 'Gemini Flash',
   provider: '',
  providerId: 'google'
  }
]
