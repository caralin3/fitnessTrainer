import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { rehydrateAction } from './utility';
import { Progress, ProgressStep } from '.';

const NAME = 'PROGRESS';
const RESET = 'RESET';
const START = 'START';
const UPDATE = 'UPDATE';
const COMPLETE = 'COMPLETE';
const REMOVE = 'REMOVE';

export interface ProgressState {
  response: Progress[];
}

const initialState: ProgressState = {
  response: []
};

const actionCreator = actionCreatorFactory(NAME);

const resetAction = actionCreator(RESET);

export const reset = () => resetAction();

const startAction = actionCreator<{ slug: string }>(START);

export const start = (slug: string) => startAction({ slug });

const updateAction = actionCreator<{ slug: string; step: ProgressStep }>(UPDATE);

export const update = (slug: string, step: ProgressStep) => updateAction({ slug, step });

const completeAction = actionCreator<{ slug: string }>(COMPLETE);

export const complete = (slug: string) => completeAction({ slug });

const removeAction = actionCreator<{ slug: string }>(REMOVE);

export const remove = (slug: string) => removeAction({ slug });

const updateSteps = (state: ProgressState, slug: string, step: ProgressStep) => {
  const [curProgress] = state.response.filter((p: Progress) => p.slug === slug);
  const exists = curProgress.steps.find(s => s.label === step.label && s.parent === step.parent);
  if (curProgress) {
    return [
      ...state.response.filter((p: Progress) => p.slug !== slug),
      {
        ...curProgress,
        steps: !exists
          ? [...curProgress.steps, step]
          : [...curProgress.steps.filter(s => `${s.label}_${s.parent}` !== `${step.label}_${step.parent}`)]
      }
    ];
  }
  return state.response;
};

const completeProgress = (state: ProgressState, slug: string) => {
  const [curProgress] = state.response.filter((p: Progress) => p.slug === slug);
  if (curProgress) {
    return [
      ...state.response.filter((p: Progress) => p.slug !== slug),
      {
        state: 'completed',
        ...curProgress
      }
    ];
  }
  return state.response;
};

export const reducer = reducerWithInitialState(initialState)
  .case(rehydrateAction, state => state)
  .case(resetAction, _ => ({ ...initialState }))
  .case(startAction, (state, { slug }) => ({
    ...state,
    response: [
      ...state.response,
      {
        slug,
        state: 'started',
        steps: []
      }
    ]
  }))
  .case(updateAction, (state, { slug, step }) => ({
    ...state,
    response: updateSteps(state, slug, step)
  }))
  .case(completeAction, (state, { slug }) => ({
    ...state,
    response: completeProgress(state, slug)
  }))
  .case(removeAction, (state, { slug }) => ({
    ...state,
    response: state.response.filter(p => p.slug !== slug)
  }));
