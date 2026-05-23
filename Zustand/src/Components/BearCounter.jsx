import { useBear } from "../Store/store";

function BearCounter() {
  const bears = useBear((state) => state.bears);
  return <h1>{bears} bears around here...</h1>;
}

export default BearCounter;
