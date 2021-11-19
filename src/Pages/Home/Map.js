import React from 'react';

const Map = () => {
    return (
        <div>
            <h2 className="text-center bg-dark text-light">Find Us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.4399514948336!2d90.61748701477501!3d24.226386676343278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375681370c3d7809%3A0x2be3b12747025324!2sMa%20Computer%20%26%20Internet%20Point!5e0!3m2!1sen!2sbd!4v1637268486351!5m2!1sen!2sbd" title="Map Location" style={{ width: "100%", height: "60vh", background: "black" }} className="shadow"></iframe>
        </div>
    );
};

export default Map;