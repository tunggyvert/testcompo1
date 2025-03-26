// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-8">
            {/* Container for the content */}
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center lg:items-start">
                {/* About Section */}
                <div className="mb-4 lg:mb-0 w-full lg:w-1/3 text-center lg:text-left">
                    <h3 className="text-lg font-semibold">เกี่ยวกับเรา</h3>
                    <p className="text-sm mt-2">
                        ศูนย์ที่พักเพื่อการเรียนรู้และสันทนาการ หรือ ห้องพักนักศึกษา มหาวิทยาลัยเทคโนโลยี
                        พระจอมเกล้าพระนครเหนือ
                    </p>
                </div>

                {/* Contact Section */}
                <div className="mb-4 lg:mb-0 w-full lg:w-1/3 text-center lg:text-left">
                    <h3 className="text-lg font-semibold">ข้อมูลติดต่อ</h3>
                    <p className="text-sm mt-2">
                        <strong>โทรศัพท์:</strong> 02-555-2000 ต่อ 2178 หรือ 1814
                    </p>
                    <p className="text-sm">
                        <strong>Email:</strong> dormmkutnb@gmail.com
                    </p>
                </div>

                {/* Working Hours Section */}
                <div className="w-full lg:w-1/3 text-center lg:text-left">
                    <h3 className="text-lg font-semibold">เวลาทำการ</h3>
                    <ul className="text-sm mt-2">
                        <li>จันทร์ - ศุกร์: 08:30 - 16:00 น.</li>
                        <li>เสาร์: 09:00 - 15:00 น.</li>
                        <li>วันหยุดนักขัตฤกษ์ (ส.-อา.): 09:00 - 15:00 น.</li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-6 text-center text-sm">
                <p>© Copyright Learning and Recreation Center, King Mongkut's University of Technology North Bangkok. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
