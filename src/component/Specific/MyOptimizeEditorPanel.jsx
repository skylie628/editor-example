import { useEffect, useState, useRef } from "react";
import { MyOptimizeEditor } from "./MyOptimizeEditor";
export default function MyOptimizeEditorPanel() {
  const [loading, setLoading] = useState(() => true);
  const editorRef = useRef();
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
    <div>
      {loading ? (
        <div>Doing heavily task when rerender the Whole EditorPanel</div>
      ) : (
        <div>
          <button
            onClick={() => {
              alert(editorRef.current.getText());
            }}
          >
            Get Editor Content
          </button>
          <MyOptimizeEditor ref={editorRef} />
        </div>
      )}
    </div>
  );
}
