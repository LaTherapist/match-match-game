export interface SettingsContent {
  name: string;
  title: string;
  placeholder: string;
  options: [
    {
      value: string;
      text: string;
    }
  ];
}
