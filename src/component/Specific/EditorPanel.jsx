import { useEffect, useState } from "react";

import MyEditor from "./MyEditor";
export default function EditorPanel() {
  const [loading, setLoading] = useState(() => true);
  const [value, setValue] = useState("");
  useEffect(() => {
    let timmer = null;
    if (loading) {
      timmer = setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    return () => {
      timmer && clearTimeout(timmer);
      if (!loading) {
        setLoading(true);
      }
    };
  });
  return (
    <div className="p-2 border border-2 border-black">
      {loading ? (
        <div>Doing heavily task when rerender the Whole EditorPanel</div>
      ) : (
        <div>
          <button
            onClick={() => {
              alert(value);
            }}
          >
            Get Editor Content
          </button>
          <MyEditor value={value} setValue={setValue} />
        </div>
      )}
    </div>
  );
}
