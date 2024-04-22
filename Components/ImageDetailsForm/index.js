export function ImageDetailsForm({ onEditDetails, image }) {
  return (
    <form
      onSubmit={(event) =>
        onEditDetails(event, image._id, image.originalFilename)
      }
    >
      <label htmlFor="title-input">💱title</label>
      <input
        type="text"
        id="title-input"
        name="title"
        defaultValue={image.title}
      />
      <label htmlFor="description-input">💱description</label>
      <textarea
        type="text"
        id="title-input"
        name="description"
        defaultValue={image.description}
        rows="10"
        cols="30"
      />
      <button>save changes</button>
    </form>
  );
}
