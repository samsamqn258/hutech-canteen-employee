import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { io } from "socket.io-client";
import { formatCurrency } from '../utils/helpers'
const Notifications = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    // Kết nối tới server Socket.IO
    const socket = io("http://localhost:4000", {
      transports: ["websocket"], // Chỉ sử dụng WebSocket
      reconnection: true, // Tự động kết nối lại khi mất kết nối
      reconnectionAttempts: 5, // Thử kết nối lại tối đa 5 lần
      reconnectionDelay: 2000, // Thời gian chờ giữa các lần thử kết nối lại
    });

    // Khi kết nối thành công
    socket.on("connect", () => {
      console.log("Socket.IO connected:", socket.id);
    });

    // Khi nhận được sự kiện "payment_success"
    socket.on("payment_success", (data) => {
      // Phát âm thanh
      const audio = new Audio("notification-20-270145.mp3");
      audio.play();

      // Hiển thị thông báo
      toast.success(
        `Đơn hàng của ${data.customerName}, Bao gồm: ${data.products} Tổng: ${formatCurrency(data.amount)} `,
        { duration: 5000 }
      );

      // Làm mới dữ liệu (invalidate query)
      queryClient.invalidateQueries({ queryKey: ["pending-orders"] });
    });

    // Xử lý khi mất kết nối
    socket.on("disconnect", () => {
      console.warn("Socket.IO disconnected. Attempting to reconnect...");
    });

    // Cleanup khi component bị unmount
    return () => {
      if (socket) {
        socket.disconnect(); // Ngắt kết nối socket
      }
    };
  }, [queryClient]);

  return null; // Component không có UI
};

export default Notifications;
