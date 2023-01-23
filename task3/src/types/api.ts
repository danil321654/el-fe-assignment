export type Response =
  | {
      status: 1;
      result: string;
    }
  | {
      status: 0;
      result: {
        asset: string;
        price: string;
      }[];
    };
