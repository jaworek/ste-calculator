import { Data } from "../../types/data";

const Statistics = ({ data }: { data: Data }) => {
  return (
    <div>
      <div>Address: {data.address}</div>
      <div style={{ padding: "10px" }}>
        <div>LP staked: {data.lp_amount}</div>
        <div>STT staked: {data.stt_amount}</div>
        <div>STE value: {data.ste_value}</div>
      </div>
    </div>
  );
};

export { Statistics };
