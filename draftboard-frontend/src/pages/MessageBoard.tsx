
import { useState } from "react";
import { Send, MessageSquare, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: number;
  author: string;
  role: "athlete" | "coach";
  sport: string;
  title: string;
  content: string;
  timestamp: string;
  replies: number;
}

const MessageBoard = () => {
  const [messages] = useState<Message[]>([
    {
      id: 1,
      author: "Sarah Johnson",
      role: "athlete",
      sport: "Basketball",
      title: "Looking for guidance on D1 recruitment process",
      content: "Hi coaches! I'm a junior in high school with a 3.9 GPA and strong basketball stats. Would love advice on the recruitment timeline and what coaches look for.",
      timestamp: "2 hours ago",
      replies: 5
    },
    {
      id: 2,
      author: "Coach Martinez",
      role: "coach",
      sport: "Soccer",
      title: "Tips for improving speed and agility",
      content: "As a college soccer coach, I often get asked about speed training. Here are some drills that have helped my players improve their game...",
      timestamp: "4 hours ago",
      replies: 12
    },
    {
      id: 3,
      author: "Mike Chen",
      role: "athlete",
      sport: "Swimming",
      title: "Transitioning from club to college swimming",
      content: "Currently swimming for a club team and considering college programs. What should I expect in terms of training intensity and time commitment?",
      timestamp: "1 day ago",
      replies: 8
    }
  ]);

  const [newMessage, setNewMessage] = useState({
    title: "",
    content: "",
    sport: ""
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Message Board</h1>
          <p className="text-xl opacity-90">Connect with coaches and athletes, share experiences, and get advice</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* New Message Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Start a Discussion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Discussion title"
                  value={newMessage.title}
                  onChange={(e) => setNewMessage({ ...newMessage, title: e.target.value })}
                />
                <Input
                  placeholder="Sport (e.g., Basketball, Soccer)"
                  value={newMessage.sport}
                  onChange={(e) => setNewMessage({ ...newMessage, sport: e.target.value })}
                />
                <Textarea
                  placeholder="Share your question, experience, or advice..."
                  value={newMessage.content}
                  onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
                  className="min-h-[120px]"
                />
                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Post Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Messages List */}
          <div className="lg:col-span-2 space-y-4">
            {messages.map((message) => (
              <Card key={message.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{message.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={message.role === "coach" ? "default" : "secondary"}>
                          {message.role === "coach" ? "Coach" : "Athlete"}
                        </Badge>
                        <Badge variant="outline">{message.sport}</Badge>
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{message.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium">{message.author}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Reply ({message.replies})
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBoard;
