import React, { useState } from "react";
import { motion } from "framer-motion";

const Chat = () => {
  const [isRotated, setIsRotated] = useState(false);
  const handleRotate = () => {
    setIsRotated(!isRotated);
  };
  return (
    <div className="fixed right-10 bottom-10 text-black ">
      <motion.div
        className="bg-white rounded-full flex items-center justify-center p-3 h-11 w-11 md:h-16 md:w-16"
        animate={{ rotateY: isRotated ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ perspective: 1000 }}
        onClick={handleRotate}
      >
        {isRotated ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-ban"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m4.9 4.9 14.2 14.2" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-bot-message-square"
          >
            <path d="M12 6V2H8" />
            <path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
            <path d="M2 12h2" />
            <path d="M9 11v2" />
            <path d="M15 11v2" />
            <path d="M20 12h2" />
          </svg>
        )}
      </motion.div>

      {isRotated && (
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg w-64 h-64 absolute bottom-20 right-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isRotated ? 1 : 0, y: isRotated ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          style={{ pointerEvents: isRotated ? "auto" : "none" }}
        >
          <div className="h-full flex flex-col justify-between">
            <div className="overflow-auto">
              <p className="text-sm text-gray-600">Chat message history...</p>
            </div>
            <div className="flex items-center border-t pt-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-2 py-1 text-sm"
              />
              <button className="ml-2 text-blue-500">Send</button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chat;
