import { useState } from "react";

interface itemsArray {
  items?: string[];
}
const TrackCardTable = ({ items }: itemsArray) => {
  const [localItemState, setLocalItemState] = useState<string[]>(items || []);
  return (
    <>
      <table data-testid="trackTable">
        <thead>
          <tr>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {localItemState?.map((item: string, index: number) => (
            <tr key={index}>
              <td>{item}</td>
              <button
                onClick={() =>
                  setLocalItemState(
                    localItemState.filter(
                      (item) => item === localItemState[index],
                    ),
                  )
                }
              >
                X
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TrackCardTable;
