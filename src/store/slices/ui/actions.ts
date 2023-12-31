import { createAsyncThunk } from '@reduxjs/toolkit';

// import { AccommodationService } from '../../../services/accommodation';

import { Template } from '../../../types/templates';
import { UI_SLICE_ID } from '../ui/types';

export const uiGetTemplates = createAsyncThunk<Array<Template>>(`${UI_SLICE_ID}/templateList`, async () => []);
