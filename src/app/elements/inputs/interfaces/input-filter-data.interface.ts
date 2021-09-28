export interface IInputFilterData {
  label: string;
  value: string;
  type?: string|undefined;
  transform?: (value: string) => string
}
