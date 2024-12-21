import { useState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';

const QRScanner = () => {
    const [data, setData] = useState('No result');
    const navigate = useNavigate();
    const audio = new Audio('notification-20-270145.mp3');

    const handleResult = useCallback(
        (result, error) => {
            if (result?.text) {
                // Kiểm tra xem mã QR này đã được xử lý chưa
                const scannedIds = JSON.parse(localStorage.getItem('scannedIds')) || [];
                if (!scannedIds.includes(result.text)) {
                    // Đánh dấu mã QR này đã quét
                    scannedIds.push(result.text);
                    localStorage.setItem('scannedIds', JSON.stringify(scannedIds));

                    // Xử lý mã QR
                    setData(result.text);
                    audio.play();
                    toast.success('Bạn có đơn hàng mới');
                    navigate(`/groupOrder/${result.text}`);
                }
            }

            if (error) {
                console.info(error);
            }
        },
        [audio, navigate]
    );

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="relative w-[600px] h-[600px]">
                <QrReader
                    onResult={handleResult}
                    constraints={{ facingMode: 'environment' }}
                    className="w-full h-full"
                />
            </div>
            <p className="mt-4 text-white">{data}</p>
        </div>
    );
};

export default QRScanner;
