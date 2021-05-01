import { MODAL } from 'src/actions/constants';

interface ModalAction {
  type: keyof typeof MODAL;
}

interface ModalInitialState {
  modal: Modal;
}

interface Modal {
  isLoading: boolean;
  isVisible: boolean;
}

type ModalReducer = (
  state: ModalInitialState | undefined,
  action: ModalAction
) => ModalInitialState;

export type { ModalReducer };
