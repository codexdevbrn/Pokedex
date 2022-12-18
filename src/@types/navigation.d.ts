export interface AboutParams {
  id: string;
  title: string;
  bannerUrl: string;
}
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      about: AboutParams;
    }
  }
}