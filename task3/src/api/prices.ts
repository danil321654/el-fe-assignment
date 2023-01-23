import { Response } from "types";

export const getPrices = (): Promise<Response> =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          Math.random() > 0.25
            ? {
                status: 0,
                result: [
                  {
                    asset: "BTC",
                    price: `${(19356.85 + (Math.random() - 0.5 * 1000)).toFixed(
                      2
                    )}`,
                  },
                  {
                    asset: "ETH",
                    price: `${(1298.23 + (Math.random() - 0.5 * 200)).toFixed(
                      2
                    )}`,
                  },
                ],
              }
            : {
                status: 1,
                result: "Prices are not available",
              }
        ),
      0
    );
  });
