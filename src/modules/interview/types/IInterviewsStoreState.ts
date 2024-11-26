import type { IInterview } from '@/interfaces'

export interface IInterviewsStoreState {
  interviews: IInterview[]
  selectedFilterResult: string
}
