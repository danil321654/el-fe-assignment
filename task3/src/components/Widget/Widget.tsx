import "./Widget.scss";

import { useCallback, useEffect, useState } from "react";
import { getPrices } from "api";
import { Response } from "types";

export const Widget = () => {
  const [data, setData] = useState<null | Response>(null);
  const [isAutoReload, setAutoReload] = useState(false);
  const loadData = useCallback(async () => setData(await getPrices()), []);

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (isAutoReload) {
      intervalId = setInterval(loadData, 3000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoReload, loadData]);

  return (
    <div className="widget">
      <div className="widget__data">
        {data && Array.isArray(data?.result) && data.result[0] ? (
          <table>
            <thead>
              <tr>
                {Object.keys(data.result[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.result.map((row) => (
                <tr key={row.asset}>
                  {Object.keys(row).map((key) => (
                    <td key={key}>{row[key as keyof typeof row]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : !data?.result[0] || !data ? (
          "No data. Press the Refresh button"
        ) : (
          (data.result as string)
        )}
      </div>
      <div className="widget__controls">
        <button onClick={loadData}>Refresh</button>
        <div>
          <input
            type="checkbox"
            checked={isAutoReload}
            onChange={() => setAutoReload((st) => !st)}
          />{" "}
          Auto-refresh
        </div>
      </div>
    </div>
  );
};
