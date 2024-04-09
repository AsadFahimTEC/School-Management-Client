const Gallery = () => {
  return (
    <div className="mt-0 bg-violet-800">
      <h1 className="text-center text-4xl text-blue-600 hover:text-green-500 font-bold mb-4">
        School Gallery
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Replace the placeholder image URLs with your actual image URLs */}
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/PMwMn32/5-DT-5.webp"
              alt=""
              className="w-full h-52 object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/ct1fQ2V/15.jpg"
              alt=""
              className="w-full h-52  object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/qM3syLs/whatsapp-image-2020-01-01-at-13-12sxdcf-1577894899392.webp"
              alt=""
              className="w-full h-52  object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/0yYn2x5/unnamed.jpg"
              alt=""
              className="w-full h-52  object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/Z8nTQT9/50-JPG.webp"
              alt=""
              className="w-full h-52  object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/HK4G4fH/Pahela-Falgun.jpg"
              alt=""
              className="w-full h-52 object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/5vkykhT/mohammad-minhaj-uddin.jpg"
              alt=""
              className="w-full h-52  object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/m4b1rNP/computer-lab-class.png"
              alt=""
              className="w-full h-52 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
