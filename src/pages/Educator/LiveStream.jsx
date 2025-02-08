import React, { useState, useEffect, useRef } from "react";
import { FaVideo, FaPlay, FaStop, FaCommentAlt, FaChartBar, FaVolumeUp, FaMicrophone, FaDesktop } from "react-icons/fa";

const StartLivestreamPage = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [streamDuration, setStreamDuration] = useState(0); // in seconds
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [streamStats, setStreamStats] = useState({
    peakViewers: 0,
    averageEngagement: 0,
  });

  const videoRef = useRef(null);
  const screenRef = useRef(null);

  useEffect(() => {
    let interval;
    if (isStreaming) {
      interval = setInterval(() => {
        setStreamDuration((prevDuration) => prevDuration + 1);
        setViewerCount((prevViewerCount) => prevViewerCount + Math.floor(Math.random() * 5)); // Simulate viewer count change
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isStreaming]);

  useEffect(() => {
    if (isCameraActive) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error("Error accessing camera: ", err));
    }
  }, [isCameraActive]);

  const handleStartStream = () => {
    setIsStreaming(true);
    // Here you would call your API to start the stream or connect to a live stream service
  };

  const handleStopStream = () => {
    setIsStreaming(false);
    // Here you would call your API to stop the stream or disconnect from a live stream service
  };

  const handleSendMessage = () => {
    if (chatInput) {
      setChatMessages([...chatMessages, { user: "Educator", message: chatInput }]);
      setChatInput("");
    }
  };

  const handleChatInputChange = (e) => {
    setChatInput(e.target.value);
  };

  const toggleCamera = () => {
    setIsCameraActive(!isCameraActive);
  };

  const toggleScreenShare = () => {
    if (isScreenSharing) {
      screenRef.current.srcObject = null;
      setIsScreenSharing(false);
    } else {
      navigator.mediaDevices.getDisplayMedia({ video: true })
        .then((stream) => {
          screenRef.current.srcObject = stream;
          setIsScreenSharing(true);
        })
        .catch((err) => console.error("Error accessing screen: ", err));
    }
  };

  const handleAITranscription = () => {
    // Placeholder: you would use an AI service for real-time transcription
    console.log("AI Transcription Active");
  };

  const handleAIChatModeration = () => {
    // Placeholder: AI-powered chat moderation logic here
    console.log("AI Chat Moderation Active");
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-50 p-6 min-h-screen">
      {/* Left side (controls) */}
      <div className="flex flex-col md:w-1/4 p-6 mb-8 gap-6">
        <h1 className="text-3xl font-semibold mb-6">Livestream Dashboard</h1>

        {/* Stream Controls */}
        <div className="flex flex-col gap-4">
          <button
            onClick={handleStartStream}
            className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
            disabled={isStreaming}
          >
            <FaPlay /> Start Livestream
          </button>
          <button
            onClick={handleStopStream}
            className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
            disabled={!isStreaming}
          >
            <FaStop /> Stop Livestream
          </button>

          {/* Camera & Screen Share Controls */}
          <button
            onClick={toggleCamera}
            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <FaVideo /> {isCameraActive ? "Turn off Camera" : "Turn on Camera"}
          </button>
          <button
            onClick={toggleScreenShare}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <FaDesktop /> {isScreenSharing ? "Stop Screen Share" : "Start Screen Share"}
          </button>

          {/* AI Integrations */}
          <div className="flex flex-col gap-4 mt-6">
            <button
              onClick={handleAITranscription}
              className="bg-purple-500 text-white px-4 py-2 rounded-md"
            >
              Start AI Transcription
            </button>
            <button
              onClick={handleAIChatModeration}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Activate AI Chat Moderation
            </button>
          </div>
        </div>
      </div>

      {/* Right side (video section and stats) */}
      <div className="flex flex-col md:w-3/4 gap-6">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
          {/* Camera */}
          <div className="flex flex-col items-center gap-2">
            <video ref={videoRef} autoPlay muted className="w-full max-w-md rounded-lg shadow-lg" />
          </div>

          {/* Screen Share */}
          <div className="flex flex-col items-center gap-2">
            <video ref={screenRef} autoPlay muted className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Stream Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-md shadow-md flex items-center gap-2">
            <FaChartBar />
            <div>
              <h4 className="font-semibold">Viewer Count</h4>
              <p>{viewerCount}</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md flex items-center gap-2">
            <FaChartBar />
            <div>
              <h4 className="font-semibold">Stream Duration</h4>
              <p>{Math.floor(streamDuration / 60)}:{streamDuration % 60}</p>
            </div>
          </div>
        </div>

        {/* Live Chat */}
        <div className="bg-white p-6 rounded-md shadow-md mb-6">
          <h3 className="text-xl font-semibold">Live Chat</h3>
          <div className="space-y-4 max-h-64 overflow-y-auto mb-4">
            {chatMessages.map((message, index) => (
              <div key={index} className="p-2 bg-gray-100 rounded-md">
                <strong>{message.user}:</strong> {message.message}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-md"
              placeholder="Type a message..."
              value={chatInput}
              onChange={handleChatInputChange}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Send
            </button>
          </div>
        </div>

        {/* Stream Link and Key */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Stream Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Stream Link:</span>
              <a href="#" className="text-blue-600">http://id.invenio.fr</a>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Stream Key:</span>
              <span className="text-gray-600">1234-1234-1234</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLivestreamPage;
