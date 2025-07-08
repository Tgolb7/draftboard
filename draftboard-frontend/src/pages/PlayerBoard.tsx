
import { useState } from "react";
import { MapPin, Clock, User, Plus, GraduationCap, Award, Video, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface RecruitingRanking {
  company: string;
  grade?: string;
  nationalRank?: number;
  positionRank?: number;
  stateRank?: number;
}

interface VideoClip {
  id: number;
  title: string;
  url: string;
  thumbnail?: string;
  description?: string;
}

interface PlayerProfile {
  id: number;
  name: string;
  currentSchool: string;
  location: string;
  sport: string;
  position: string;
  gpa: number;
  yearsLeft: number;
  desiredDivision: "Division I" | "Division II" | "Division III" | "NAIA" | "JUCO";
  stats: string;
  description: string;
  achievements: string[];
  postedDate: string;
  videoClips: VideoClip[];
  recruitingRankings: RecruitingRanking[];
}

const PlayerBoard = () => {
  const [players] = useState<PlayerProfile[]>([
    {
      id: 1,
      name: "Marcus Thompson",
      currentSchool: "Community College of Denver",
      location: "Denver, CO",
      sport: "Basketball",
      position: "Small Forward",
      gpa: 3.7,
      yearsLeft: 2,
      desiredDivision: "Division I",
      stats: "18.5 PPG, 8.2 RPG, 4.1 APG",
      description: "Versatile forward looking to transfer to a competitive D1 program. Strong work ethic, team leader, and dedicated student-athlete seeking the next level of competition.",
      achievements: ["Conference Player of the Year", "Academic All-Conference", "Team Captain 2 years"],
      postedDate: "3 days ago",
      videoClips: [
        { id: 1, title: "Season Highlights", url: "https://example.com/video1", description: "Best plays from this season" },
        { id: 2, title: "Game Winner vs State", url: "https://example.com/video2", description: "Clutch shot to win the championship" }
      ],
      recruitingRankings: [
        { company: "ESPN", nationalRank: 245, positionRank: 45 },
        { company: "247Sports", nationalRank: 220, positionRank: 38 }
      ]
    },
    {
      id: 2,
      name: "Sarah Martinez",
      currentSchool: "Valley High School",
      location: "Phoenix, AZ",
      sport: "Soccer",
      position: "Midfielder",
      gpa: 3.9,
      yearsLeft: 4,
      desiredDivision: "Division II",
      stats: "12 goals, 15 assists this season",
      description: "Incoming freshman with strong academic record and soccer skills. Looking for a program that values both athletic and academic excellence.",
      achievements: ["State Championship Winner", "All-State First Team", "National Honor Society"],
      postedDate: "1 week ago",
      videoClips: [
        { id: 3, title: "Skills Showcase", url: "https://example.com/video3", description: "Technical skills and ball handling" }
      ],
      recruitingRankings: [
        { company: "TopDrawerSoccer", nationalRank: 156, positionRank: 28, stateRank: 5 }
      ]
    },
    {
      id: 3,
      name: "Jake Wilson",
      currentSchool: "Metro State University",
      location: "Minneapolis, MN",
      sport: "Baseball",
      position: "Pitcher",
      gpa: 3.4,
      yearsLeft: 1,
      desiredDivision: "Division I",
      stats: "2.15 ERA, 89 strikeouts in 78 innings",
      description: "Graduate transfer pitcher looking for final season opportunity. Proven track record and leadership experience. Ready to contribute immediately.",
      achievements: ["Conference Pitcher of the Week (3x)", "Team MVP", "Academic Achievement Award"],
      postedDate: "5 days ago",
      videoClips: [
        { id: 4, title: "Pitching Mechanics", url: "https://example.com/video4", description: "Fastball and breaking ball showcase" },
        { id: 5, title: "Complete Game Shutout", url: "https://example.com/video5", description: "7-inning shutout performance" }
      ],
      recruitingRankings: [
        { company: "Perfect Game", grade: "8.5", nationalRank: 180, positionRank: 25 },
        { company: "Baseball America", nationalRank: 195, positionRank: 30 }
      ]
    }
  ]);

  const [showPostForm, setShowPostForm] = useState(false);

  const renderRecruitingRankings = (rankings: RecruitingRanking[]) => {
    if (rankings.length === 0) return null;
    
    return (
      <div className="bg-blue-50 p-3 rounded-lg">
        <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
          <Star className="w-4 h-4 text-blue-600" />
          Recruiting Rankings:
        </h4>
        <div className="space-y-1">
          {rankings.map((ranking, index) => (
            <div key={index} className="text-sm">
              <span className="font-medium text-blue-800">{ranking.company}:</span>
              {ranking.grade && <span className="ml-1">Grade {ranking.grade}</span>}
              {ranking.nationalRank && <span className="ml-1">#{ranking.nationalRank} National</span>}
              {ranking.positionRank && <span className="ml-1">#{ranking.positionRank} Position</span>}
              {ranking.stateRank && <span className="ml-1">#{ranking.stateRank} State</span>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderVideoClips = (clips: VideoClip[]) => {
    if (clips.length === 0) return null;
    
    return (
      <div>
        <h4 className="font-semibold mb-2 flex items-center gap-1">
          <Video className="w-4 h-4" />
          Video Highlights ({clips.length}):
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {clips.map((clip) => (
            <div key={clip.id} className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-2 mb-1">
                <Video className="w-3 h-3 text-blue-600" />
                <span className="font-medium text-sm">{clip.title}</span>
              </div>
              {clip.description && (
                <p className="text-xs text-gray-600">{clip.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary text-secondary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Player Transfer Portal</h1>
              <p className="text-xl opacity-90">Athletes seeking new opportunities and team placements</p>
            </div>
            <Button 
              variant="default" 
              size="lg"
              onClick={() => setShowPostForm(!showPostForm)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Profile
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Create Player Profile Form */}
        {showPostForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Create Your Player Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Current School" />
                <Input placeholder="Location" />
                <Input placeholder="Sport" />
                <Input placeholder="Position" />
                <Input placeholder="GPA (e.g., 3.5)" type="number" step="0.1" />
                <Input placeholder="Years of Eligibility Left" type="number" />
                <Input placeholder="Desired Division (D1, D2, D3, NAIA, JUCO)" />
              </div>
              <Input placeholder="Key Stats (e.g., 15 PPG, 3.2 ERA, etc.)" />
              <Textarea placeholder="Tell coaches about yourself, your goals, and what you bring to a team..." className="min-h-[100px]" />
              <Textarea placeholder="Achievements and awards (one per line)..." className="min-h-[80px]" />
              <Textarea placeholder="Video links and descriptions (one per line: Title - URL - Description)..." className="min-h-[80px]" />
              <Textarea placeholder="Recruiting rankings (Company: Grade/National Rank/Position Rank)..." className="min-h-[60px]" />
              <div className="flex gap-2">
                <Button>Create Profile</Button>
                <Button variant="outline" onClick={() => setShowPostForm(false)}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Player Profiles List */}
        <div className="space-y-6">
          {players.map((player) => (
            <Card key={player.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{player.name} - {player.position}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium">{player.currentSchool}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {player.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {player.postedDate}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-2">{player.sport}</Badge>
                    <div className="text-sm space-y-1">
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-3 h-3" />
                        GPA: {player.gpa}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {player.yearsLeft} years left
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Badge variant="default">{player.desiredDivision}</Badge>
                    <Badge variant="secondary">{player.position}</Badge>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-sm mb-1">Key Stats:</h4>
                    <p className="text-sm">{player.stats}</p>
                  </div>

                  {renderRecruitingRankings(player.recruitingRankings)}
                  
                  <p className="text-gray-700">{player.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {player.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {renderVideoClips(player.videoClips)}
                  
                  <div className="flex gap-2 pt-2">
                    <Button>Contact Player</Button>
                    <Button variant="outline">
                      <User className="w-4 h-4 mr-2" />
                      View Full Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerBoard;
