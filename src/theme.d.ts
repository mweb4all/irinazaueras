// src/theme.d.ts
import { BreakpointOverrides } from '@mui/system';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    custom: true; // add your custom breakpoint here
  }
}