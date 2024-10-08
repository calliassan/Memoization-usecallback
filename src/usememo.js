import React, { memo, useMemo } from "react";
// concept 1:
// export const A = ({ toggle }) => {
//   console.log("I am rendering but why?");
//   return <div>Hello A {toggle ? "true" : "false"}</div>;
//   ***concept 2***********
// export const A = ({ val }) => {
//   console.log("I am rendering but why?");
//   return <div>{val}</div>;

// ***concept 3***(Here it rerenders because callme is a function and is nonprimitive data type and it works on pass by reference concept.
//   when the parent is rendered once the state change on click, it rerenders and then the function also gets new reference and hence
//then finally it becomes new and hence it is looked like component prop changed and thus rerenders. memoized fails here}
export const A = ({ callme }) => {
  console.log("I am rendering but why?");

  callme();
  return <div>Hello A</div>;
};
const memoizedA = React.memo(A);
export default memoizedA;

// ***Concept***
// Nothing has changed that is output is same and the input is also same so, why rerender?so we used memo.
// React memo makes pure components but when props Change, it rerenders that is, when values changes then only
// we will call it else we wont says memo

//Functions are pass by reference so react memo cant restrict rendering though same input unlike for value where it is pass by
// value and memo works. Memory reference changes when app.js rerenders and this is seen as props change and hence
// component rerenders.

//This can be stopped by telling parent component to no rerender such function when input is not changing. for this,
//usecallback is used.usecallback will not recreate new reference of the function and thus it will not rerender.

//usememo is used inplace of usecallback when we deal with the values that is returned from the function.with usecall back we are
//intrested in the whole logic of the function.
