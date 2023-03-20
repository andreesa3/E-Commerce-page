import {useState } from "react";

const Home = ({count, setCount, handleAmount, setShowPreview}) => {
  /* Array of Thumbnails */ 
  const thumbnails = [
    "./images/image-product-1-thumbnail.jpg",
    "./images/image-product-2-thumbnail.jpg",
    "./images/image-product-3-thumbnail.jpg",
    "./images/image-product-4-thumbnail.jpg"
  ]

  /* Array of Images */
  const productImages = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];

  /* Previous and Next Image state*/
  let [currentImage, setCurrentImage] = useState(0);
  const [selectedThumbnails, setSelectedThumbnails] = useState(thumbnails.map(() => false));
  
  /* Lightbox */
  let [lightboxImage, setLightboxImage] = useState(0);
  const [lightboxThumbnails, setLightboxThumbnails] = useState(thumbnails.map(() => false));
  const [focus, setFocus] = useState(false)

  /* Active one of the thumbnail when I click */
  function handleThumbnail(e, index) {
    e.preventDefault();
    setSelectedThumbnails(prevState => prevState.map((value, i) => i === index));
    setCurrentImage(index);
  }

  /* Remove the style when I click another thumbnail */
  function removeStyle() {
    setSelectedThumbnails(thumbnails.map(() => false));
    setLightboxThumbnails(thumbnails.map(() => false));
  }

  /* Amount Buttons */
  function minusButton() {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  function plusButton() {
    setCount(count + 1)
  }

  /* Lightbox */
  function handleLightboxThumbnail(e, index) {
    e.preventDefault();
    setLightboxThumbnails(prevState => prevState.map((value, i) => i === index));
    setLightboxImage(index);
  }
  function focusMainImage() {
   setShowPreview(false)
   setFocus(true);
  }
  function closeLightbox() {
    setFocus(false);
  }

  return (
    <main className="home">
      <section>
        <div className="container">
          {/* Two Sections of the page (images and details) */}
          <div className="columns">
            {/* Product image with the other thumbnails */}
            <div className="images-box">
              {/* Main Image */}
              <div className="main-image-div">
                {/* Previous and Next Arrow Buttons */}
                <img src={productImages[currentImage]} onClick={focusMainImage} alt="Main Image" />
                <a href="#" className="previous" onMouseDown={removeStyle} onClick={() => currentImage <= 0 ? (currentImage = 4 , setCurrentImage(currentImage - 1)) : setCurrentImage(currentImage - 1)}>
                  <img src="./images/icon-previous.svg" alt="Left Arrow"/>
                </a>
                <a href="#" className="next" onMouseDown={removeStyle} onClick={() => currentImage >= 3 ? (currentImage = -1, setCurrentImage(currentImage + 1)) : setCurrentImage(currentImage + 1)}>
                  <img src="./images/icon-next.svg" alt="Right Arrow"/>
                </a>
              </div>
              {/* Thumbnails List */}
              <div className="thumbnails-list">
                <ul >
                  {thumbnails.map((thumbnail, index) => (
                    <li className={selectedThumbnails[index] ? 'selected' : ''} key={index} onClick={(e) => handleThumbnail(e, index)}>
                      <a href="#">
                        <img className={selectedThumbnails[index] ? 'imgFocus' : ''} src={thumbnail} alt="Thumbnail" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Focus on main Image */}
              {
                focus ? (
                  <div className="focus">
                    <div>
                      <div className="close-icon-div">
                        <img src="./images/icon-close.svg" className="close" alt="" onClick={closeLightbox}/>
                      </div>
                      <div className="focus-main-image">
                        <img src={productImages[lightboxImage]} alt="Focus Main Image" />
                        {/* Previous and Next Arrow Buttons */}
                        <a href="#" className="previous" onMouseDown={removeStyle} onClick={() => lightboxImage <= 0 ? (lightboxImage = 4 , setLightboxImage(lightboxImage - 1)) : setLightboxImage(lightboxImage - 1)}>
                          <img src="./images/icon-previous.svg" alt="Left Arrow"/>
                        </a>
                        <a href="#" className="next" onMouseDown={removeStyle} onClick={() => lightboxImage >= 3 ? (lightboxImage = -1, setLightboxImage(lightboxImage + 1)) : setLightboxImage(lightboxImage + 1)}>
                          <img src="./images/icon-next.svg" alt="Right Arrow"/>
                        </a>
                      </div>
                      {/* Thumbnails List */}
                      <div className="lightbox-thumbnails-list">
                        <ul >
                          {thumbnails.map((thumbnail, index) => (
                            <li className={lightboxThumbnails[index] ? 'selected' : ''} key={index} onClick={(e) => handleLightboxThumbnail(e, index)}>
                              <a href="#">
                                <img className={lightboxThumbnails[index] ? 'imgFocus' : ''} src={thumbnail} alt="Thumbnail" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : <></>
              }
            </div>
            {/* Details */}
            <div className="details">
              {/* Description */}
              <div>
                <span className="highlight">SNEAKER COMPANY</span>
                <p className="product-name">Fall Limited Edition <br />Sneakers</p>
                <p className="product-description">
                  These low-profile sneakers are your perfect casual wear companion. Featuring a 
                  durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
              </div>

              {/* Price Box and Amount*/}
              <div>
                {/* Price Box */}
                <div className="price-box">
                  <div className="new-price">
                    <p className="price">$125.00</p>
                    <div className="discount">
                      <p>50%</p>
                    </div>
                  </div>
                  <div>
                    <p className="old-price">$250.00</p>
                  </div>
                </div>

                {/* Amount */}
                <div className="amount-box">
                  <div className="amount">
                    <img onClick={minusButton} className="amount-icon" src="./images/icon-minus.svg" alt="Minus Icon" />
                    <p>{count}</p>
                    <img onClick={plusButton} className="amount-icon" src="./images/icon-plus.svg" alt="Plus Icon" />
                  </div>
                  <button className="btn" onClick={() => handleAmount(count)}>
                    <img src="./images/icon-cart.svg" alt="cart-icon" />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
