import styled from "styled-components";

const StyledDetailsForm = styled.form`
  display: grid;
`;

const StyledBottonWrapper = styled.div`
  display: flex;
  gap: 5px;
  padding-bottom: 10px;
`;

export function ImageDetailsForm({ onDelete, onEditDetails, image }) {
  return (
    <>
      <h3>Change Details</h3>
      <StyledDetailsForm
        onSubmit={(event) =>
          onEditDetails(event, image._id, image.originalFilename)
        }
      >
        <label htmlFor="title-input">Title</label>
        <input
          type="text"
          id="title-input"
          name="title"
          defaultValue={image.title}
          style={{ padding: "5px" }}
        />
        <label htmlFor="description-input">Description</label>
        <textarea
          type="text"
          id="title-input"
          name="description"
          defaultValue={image.description}
          rows="10"
          cols="30"
          style={{
            fontFamily: "Helvetica, sans-serif",
            padding: "5px",
          }}
        />
        <StyledBottonWrapper>
          <button
            onClick={() => onDelete(image._id, image.originalFilename)}
            style={{
              width: "50%",
              marginTop: "10px",
              padding: "5px",
              fontWeight: "700",
            }}
          >
            Save Changes
          </button>
          <button
            onClick={() => onDelete(image._id, image.originalFilename)}
            style={{
              width: "50%",
              marginTop: "10px",
              padding: "5px",
              color: "red",
              fontWeight: "700",
            }}
          >
            <span role="img">Delete This Work</span>
          </button>
        </StyledBottonWrapper>
      </StyledDetailsForm>
    </>
  );
}
