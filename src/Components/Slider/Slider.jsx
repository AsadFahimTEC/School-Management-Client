import './Slider.css';
const Slider = () => {
  return (
    <div className="mt-0 bg-violet-800">
      {/* Image Marquee */}
      <div className="marquee-container">
        <div className="marquee">
          {/* Group 1 */}
          <div className="marquee-group">
            <img
              src="https://i.ibb.co/z43rZbn/eid.jpg"
              alt="Image 1"
              className="marquee-item"
            />
            {/* Add a gap between images */}
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/x1ZhFjv/eid2.jpg"
              alt="Image 2"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/0XGqMbp/Slider-1-825x340.jpg"
              alt="Image 3"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/SX4qf8R/5cfd0c0f8628f.jpg"
              alt="Image 4"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/df9qdx1/da08618a96be25b33e79f7fc14a0e02f.jpg"
              alt="Image 5"
              className="marquee-item"
            />
          </div>

          {/* Group 2 (hidden for continuous scrolling) */}
          <div aria-hidden="true" className="marquee-group">
            {/* Duplicate of Group 1 for continuous scrolling effect */}
            <img
              src="https://i.ibb.co/x1ZhFjv/eid2.jpg"
              alt="Image 1"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/ygYwHym/Hai-Ramadan-at-Expo-City-Dubai-photo-WAM.jpg"
              alt="Image 2"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/tZhFNv3/Moslema-in-style-8090401398.jpg"
              alt="Image 3"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/RYVZGb5/Untitled-1-copy.jpg"
              alt="Image 4"
              className="marquee-item"
            />
            <div className="marquee-gap"></div>
            <img
              src="https://i.ibb.co/df9qdx1/da08618a96be25b33e79f7fc14a0e02f.jpg"
              alt="Image 5"
              className="marquee-item"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
