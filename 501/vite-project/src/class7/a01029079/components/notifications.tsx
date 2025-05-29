import React, { useEffect, useState } from 'react';

const RealTimeNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event: MessageEvent) => {
      const message = event.data;
      setNotifications((prev) => [...prev, message]);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h2>Real-Time Notifications</h2>
      <a href="../../../../../src/class3/a01029079/public/menu3.html" className="class-button-link">
              Go to Menu
            </a>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeNotifications;