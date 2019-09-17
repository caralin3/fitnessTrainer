import { ProgressState } from './progress';

export interface AsyncState<T> {
  response?: T;
  loading: boolean;
  error?: Error;
}

export interface ApplicationState {
  Progress: ProgressState;
}

export type ProgressMode = 'started' | 'completed';

export interface ProgressStep {
  label: string;
  parent: string;
}

export interface Progress {
  slug: string;
  state: ProgressMode;
  steps: ProgressStep[];
}
