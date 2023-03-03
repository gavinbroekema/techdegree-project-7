import Nav from "./Nav";
import Image from "./Image";


const ImageList = (props) => {
  let images;
  if(props.loading) {
    images = <p>Loading...</p>
  } else if (!props.loading) {
    const imageData = props.data.photos.photo;
    images = imageData.map(image => <Image src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`} key={image.id} alt={image.title} />)
  } else {
    images = ( 
      <li class="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </li>
    )
  }
  return (
    <section>
      <Nav />
      <div class="photo-container">
        <h2>Results</h2>
        <ul>
        {images}
        </ul>
      </div>
    </section>
  );
};

export default ImageList;
