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
      {/* <video
        id="sampleMovie"
        width="640"
        height="360"
        preload
        autoPlay
        controls
      >
        <source src="/dog.mp4" />
      </video> */}
    </div>
  );
}
