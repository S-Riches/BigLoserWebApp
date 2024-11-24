interface Props {
  items: string[];
  setItemState: (items: string[]) => void;
}
const TrackCardTable = ({ items, setItemState }: Props) => {
  return (
    <>
      <table data-testid="trackTable" className="table">
        <thead>
          <tr>
            <th>Items:</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item: string, index: number) => (
            <tr key={index}>
              <td>{item}</td>
              <button
                className="btn"
                onClick={() =>
                  setItemState(items.filter((item) => item === items[index]))
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
