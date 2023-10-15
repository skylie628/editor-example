import React, { forwardRef, useImperativeHandle, useState } from "react";
import Editor from "../Generic/Editor";
//HOC
export const MyOptimizeEditor = forwardRef(function MyOptimizeEditor(
  props,
  ref
) {
  const [value, setValue] = useState("");
  useImperativeHandle(
    ref,
    () => {
      return {
        getText() {
          return value;
        },
      };
    },
    [value]
  );
  return (
    <Editor
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
});
