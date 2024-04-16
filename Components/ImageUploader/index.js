import { onChange, onSubmit, uploadFile } from "./functions";
import { useState } from "react";
import useSWRMutation from "swr/mutation";

export function ImageUploader() {
  const [fileData, setFileData] = useState();
  const { trigger } = useSWRMutation("/api/images", uploadFile);

  return (
    <>
      <form onSubmit={(event) => onSubmit(event, fileData, trigger)}>
        <label htmlFor="file">💱file</label>
        <input
          type="file"
          name="file"
          id=""
          onChange={(event) => onChange(event, setFileData)}
        />
        <label htmlFor="artName-input">💱name</label>
        <input
          type="artName"
          id="artName-input"
          name="artName"
          defaultValue="tba"
        />
        <button>upload</button>
      </form>
    </>
  );
}
