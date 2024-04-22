export function ImageDetailsForm({ onEditDetails, image }) {
  return (
    <form
      onSubmit={(event) =>
        onEditDetails(event, image._id, image.originalFilename)
      }
    >
      <label htmlFor="artName-input">💱name</label>
      <input
        type="text"
        id="title-input"
        name="title"
        defaultValue="please type title"
      />
      <button>add name</button>
    </form>
  );
}
