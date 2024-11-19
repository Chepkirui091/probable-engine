import React from 'react';
import Image from 'next/image'; // Importing Image from next/image

const Logo = () => {
    return (
        <div className="logo h-20 w-20">
            <Image src="/static/logo.jpg" alt="logo" width={80} height={80} /> {/* Directly reference the file from /public */}
        </div>
    );
};

export default Logo;
