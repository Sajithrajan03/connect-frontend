import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaUser, FaRobot } from "react-icons/fa";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto"; // Automatically register chart.js components

const SERVER_URL = "http://localhost:8132";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visualizing, setVisualizing] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (messageContent) => {
    if (!messageContent.trim()) {
      console.error("Empty message content.");
      return;
    }

    const newMessage = { role: "user", content: messageContent };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(`${SERVER_URL}/chat`, {
        messages: [...messages, newMessage],
        add_system_prompt: messages.length === 0,
        provider: "openai/gpt-3.5-turbo",
        model: null,
      });

      const assistantResponse = response.data.messages.pop();
      setMessages((prevMessages) => [...prevMessages, assistantResponse]);
    } catch (err) {
      console.error("Error communicating with the server:", err);
      setError("Failed to get a response from the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const generateGraph = async (content) => {
    setVisualizing(true);
    try {
      const response = await axios.post(`${SERVER_URL}/generate-graph`, { content });
      const graphicalRepresentation = response.data.graphical_representation;

      if (graphicalRepresentation) {
        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.content === content ? { ...msg, graphicalRepresentation } : msg
          )
        );
      } else {
        console.error("No graphical representation generated.");
      }
    } catch (err) {
      console.error("Error generating graph:", err);
      setError("Failed to generate graphical representation.");
    } finally {
      setVisualizing(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  const renderChart = (graphicalRepresentation) => {
    if (!graphicalRepresentation || !graphicalRepresentation.data) {
      return <p>No data available for the chart.</p>;
    }

    const { type, data, x_axis_label, y_axis_label } = graphicalRepresentation;

    if (!data.labels || !data.values) {
      return <p>Invalid chart data.</p>;
    }

    const chartConfig = {
      labels: data.labels,
      datasets: [
        {
          label: "Data",
          data: data.values,
          backgroundColor: ["#3b82f6", "#fbbf24", "#10b981", "#ef4444", "#8b5cf6"],
          borderColor: "#2563eb",
          borderWidth: 1,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: x_axis_label || "X-axis",
          },
        },
        y: {
          title: {
            display: true,
            text: y_axis_label || "Y-axis",
          },
          beginAtZero: true,
        },
      },
    };

    switch (type) {
      case "bar":
        return <Bar data={chartConfig} options={chartOptions} />;
      case "line":
        return <Line data={chartConfig} options={chartOptions} />;
      case "pie":
        return <Pie data={chartConfig} options={chartOptions} />;
      default:
        return <p>Unsupported chart type: {type}</p>;
    }
  };

  const renderTable = (tableContent) => {
    const rows = tableContent
      .split("\n")
      .map((row) => row.trim())
      .filter((row) => row && row.includes("|") && !/^[-\s|]+$/.test(row));

    if (rows.length === 0) return <p>{tableContent}</p>;

    const headers = rows[0]
      .split("|")
      .map((header) => header.trim())
      .filter((header) => header);
    const bodyRows = rows.slice(1).map((row) =>
      row
        .split("|")
        .map((cell) => cell.trim())
        .filter((cell) => cell)
    );

    return (
      <table className="table-auto border-collapse border border-gray-300 w-full mt-4 text-sm">
        <thead>
          <tr className="bg-blue-200">
            {headers.map((header, index) => (
              <th
                key={index}
                className="border border-gray-300 px-4 py-2 text-left font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-gray-300 px-4 py-2 text-left"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-gray-900">
      <div className="flex flex-col w-full max-w-7xl h-[95vh] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              } items-start space-x-4`}
            >
              <div
                className={`p-2 rounded-full ${
                  message.role === "user" ? "bg-blue-200" : "bg-gray-200"
                }`}
              >
                {message.role === "user" ? (
                  <FaUser className="text-blue-600" size={20} />
                ) : (
                  <FaRobot className="text-gray-600" size={20} />
                )}
              </div>
              <div
                className={`p-4 rounded-xl shadow-md max-w-4xl w-full ${
                  message.role === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {message.graphicalRepresentation ? (
                  <div className="h-96">{renderChart(message.graphicalRepresentation)}</div>
                ) : message.content.includes("|") ? (
                  <>
                    <div className="overflow-auto">{renderTable(message.content)}</div>
                    <button
                      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                      onClick={() => generateGraph(message.content)}
                      disabled={visualizing}
                    >
                      {visualizing ? "Generating..." : "Visualize"}
                    </button>
                  </>
                ) : (
                  <p className="text-gray-800">{message.content}</p>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="self-start text-blue-600 italic flex items-center">
              <svg
                className="animate-spin h-5 w-5 text-blue-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Assistant is typing...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form
          className="flex items-center gap-3 p-4 bg-gray-100"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Message input"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
