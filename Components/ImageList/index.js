import { ImageComponent } from "../ImageComponent";

export function ImageList({ images }) {
  console.log(images);
  return (
    <div className={`flex flex-row`}>
      {(images.length &&
        images.map((image) => (
          <ImageComponent image={image} key={image._id} />
        ))) ||
        "No images"}
    </div>
  );
}
