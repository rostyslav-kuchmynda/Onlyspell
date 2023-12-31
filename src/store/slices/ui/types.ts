import { Template } from '../../../types/template';

export const UI_SLICE_ID = 'ui';

export type UIStateSlice = {
  TemplateList: Array<Template> | [];
};

export type UIStoreSlice = { [UI_SLICE_ID]: UIStateSlice };
