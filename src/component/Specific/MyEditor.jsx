import Editor from "../Generic/Editor";
export default function MyEditor({ value, setValue }) {
  return <Editor value={value} onChange={(e) => setValue(e.target.value)} />;
}
