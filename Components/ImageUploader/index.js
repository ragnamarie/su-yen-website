import { onChange, onSubmit, uploadFile } from "./functions";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import styled from "styled-components";

const StyledUploadForm = styled.form`
  position: relative;
  padding-bottom: 20px;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px; /* Adjust this value to control the distance  */
    width: 100%;
    height: 1px;
    background-color: black;
  }
`;

export function ImageUploader() {
  const [fileData, setFileData] = useState();
  const { trigger } = useSWRMutation("/api/images", uploadFile);

  return (
    <>
      <StyledUploadForm
        onSubmit={(event) => onSubmit(event, fileData, trigger)}
      >
        <h3>Upload New Picture</h3>
        <label htmlFor="file"></label>
        <input
          type="file"
          name="file"
          id=""
          onChange={(event) => onChange(event, setFileData)}
          style={{ fontFamily: "Inter, sans-serif", fontStyle: "italic" }}
        />
        <button
          style={{
            marginTop: "5px",
            fontWeight: "700",
          }}
        >
          Upload
        </button>
      </StyledUploadForm>
    </>
  );
}
