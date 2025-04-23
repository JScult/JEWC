import React from "react";

const Map = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-gradient-to-r from-purple-600 to-red-600 p-1 rounded-lg shadow-lg">
        <div className="bg-white rounded-lg p-4">
          <h2 className="text-3xl text-center font-bold text-purple-700 mb-2">EVENT LOCATION</h2>
          <p className="text-gray-600 text-center mb-4">Tunis, Tunisia</p>
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.4392330410337!2d10.234298724509744!3d36.83195537223812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3516790a5ff5%3A0x784f7c64f3a774e0!2sEl%20Majles!5e0!3m2!1sar!2stn!4v1745370186731!5m2!1sar!2stn"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;