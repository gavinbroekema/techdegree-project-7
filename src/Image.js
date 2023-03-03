const Image = (props) => {
  // const {images} = props;
  const {src, alt} = props;

  return (
    <li>
      <img
          src={src}
          alt={alt}
          />
    </li>
  )
}

export default Image;
