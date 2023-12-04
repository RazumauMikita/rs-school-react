import { FormState } from '../../store/reducers/slice.type';
import { RootState } from '../../store/store';

export interface DataTileProps {
  title: string;
  route: string;
  selectedForm: (state: RootState) => FormState;
  isSubmit?: boolean;
}
