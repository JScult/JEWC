import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false); // State to toggle collapse
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch("https://api.mistral.ai/v1/agents/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer jXUZcsx36fRk6qBzwsbQj2YjikXQPDYk`, // Replace with your actual API key
        },
        body: JSON.stringify({
          agent_id: "ag:1a9c5fed:20250428:jewc-chatbot:e6397b8d",
          messages: [
            { role: "user", content: input }
          ],
        }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: crypto.randomUUID(),
        content: data.choices[0]?.message?.content || "Sorry, I didn't quite get that.",
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);

      const errorMessage: Message = {
        id: crypto.randomUUID(),
        content: "Oops! Something went wrong. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 w-[400px] bg-gradient-to-br from-red-800 to-purple-800 rounded-lg shadow-xl flex flex-col border border-gray-200",
        isCollapsed ? "h-16" : "h-[500px]"
      )}
    >
      {/* Chat Header */}
      <div
        className="p-4 border-b text-white rounded-t-lg flex justify-between items-center cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)} // Toggle collapse
      >
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Bot className="w-5 h-5" /> Chat Assistant
        </h2>
        {isCollapsed ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </div>

      {/* Chat Content */}
      {!isCollapsed && (
        <>
          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4 overflow-y-auto" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-200 mt-10">
                  Start the conversation!
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      'flex items-start gap-2',
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.sender === 'bot' && (
                      <Bot className="w-6 h-6 text-white mt-1" />
                    )}
                    <div
                      className={cn(
                        'max-w-[70%] p-3 rounded-lg',
                        message.sender === 'user'
                          ? 'bg-white text-gray-800'
                          : 'bg-gray-100 text-gray-800'
                      )}
                    >
                      <p>{message.content}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <User className="w-6 h-6 text-white mt-1" />
                    )}
                  </div>
                ))
              )}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;