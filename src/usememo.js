import React, { useMemo } from "react";
export const A = ({ callme }) => {
  console.log("I am rendering but why?");
  //   return <div>Hello A{toggle ? "true" : "false"}</div>;
  //   ***concept 2***(change the above prop to toggle for concept 1)

  //   return <div>{val}: A</div>;
  // ***concept 3***(Here it rerenders because callme is a function and is nonprimitive data type and it works on pass by reference concept.
  //   when the parent is rendered once the state change on click, it rerenders and then the function also gets new reference and hence
  //then finally it becomes new and hence it is looked like component prop changed and thus rerenders. memoized fails here}
  callme();
  return <div>Hello A</div>;
};
const memoizedA = React.memo(A);
export default memoizedA;
