
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Users, GraduationCap, Trophy, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface SchoolRecommendation {
  name: string;
  location: string;
  division: string;
  size: string;
  matchScore: number;
  strengths: string[];
  academics: string;
  athletics: string;
  campus: string;
  socialLife: string;
}

const SurveyResults = () => {
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState<SchoolRecommendation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const surveyData = localStorage.getItem('athleteSurveyData');
    if (!surveyData) {
      navigate('/athlete-survey');
      return;
    }

    // Simulate processing and generate recommendations
    setTimeout(() => {
      const mockRecommendations = generateRecommendations(JSON.parse(surveyData));
      setRecommendations(mockRecommendations);
      setLoading(false);
    }, 2000);
  }, [navigate]);

  const generateRecommendations = (surveyData: any): SchoolRecommendation[] => {
    // Mock recommendation algorithm - in a real app, this would be more sophisticated
    const baseSchools = [
      {
        name: "Duke University",
        location: "Durham, NC",
        division: "D1",
        size: "Medium",
        academics: "Elite",
        athletics: "Top-tier",
        campus: "Beautiful",
        socialLife: "Active"
      },
      {
        name: "Stanford University", 
        location: "Stanford, CA",
        division: "D1",
        size: "Medium",
        academics: "Elite",
        athletics: "Elite",
        campus: "Outstanding",
        socialLife: "Balanced"
      },
      {
        name: "University of North Carolina",
        location: "Chapel Hill, NC", 
        division: "D1",
        size: "Large",
        academics: "Excellent",
        athletics: "Elite",
        campus: "Traditional",
        socialLife: "Very Active"
      },
      {
        name: "Williams College",
        location: "Williamstown, MA",
        division: "D3",
        size: "Small",
        academics: "Elite",
        athletics: "Strong",
        campus: "Scenic",
        socialLife: "Close-knit"
      },
      {
        name: "University of Florida",
        location: "Gainesville, FL",
        division: "D1", 
        size: "Very Large",
        academics: "Strong",
        athletics: "Elite",
        campus: "Modern",
        socialLife: "Very Active"
      },
      {
        name: "Middlebury College",
        location: "Middlebury, VT",
        division: "D3",
        size: "Small", 
        academics: "Elite",
        athletics: "Competitive",
        campus: "Beautiful",
        socialLife: "Balanced"
      },
      {
        name: "University of Michigan",
        location: "Ann Arbor, MI",
        division: "D1",
        size: "Very Large",
        academics: "Excellent", 
        athletics: "Elite",
        campus: "Traditional",
        socialLife: "Very Active"
      },
      {
        name: "Pomona College",
        location: "Claremont, CA",
        division: "D3",
        size: "Small",
        academics: "Elite",
        athletics: "Strong",
        campus: "Beautiful", 
        socialLife: "Intellectual"
      }
    ];

    // Calculate match scores based on survey responses
    const scoredSchools = baseSchools.map(school => {
      let score = 0;
      const strengths: string[] = [];

      // Division match
      if (school.division.toLowerCase() === surveyData.division) {
        score += 25;
        strengths.push("Perfect division match");
      }

      // Size preferences
      const sizeMapping: Record<string, string> = {
        'small': 'Small',
        'medium': 'Medium', 
        'large': 'Large',
        'very-large': 'Very Large'
      };
      if (school.size === sizeMapping[surveyData.schoolSize]) {
        score += 20;
        strengths.push("Ideal school size");
      }

      // Academic level
      if (surveyData.educationLevel === 'very-important' && school.academics === 'Elite') {
        score += 20;
        strengths.push("Elite academics");
      } else if (surveyData.educationLevel === 'important' && ['Elite', 'Excellent'].includes(school.academics)) {
        score += 15;
        strengths.push("Strong academics");
      }

      // Athletic facilities/culture
      if (surveyData.athleticFacilities === 'very-important' && ['Elite', 'Top-tier'].includes(school.athletics)) {
        score += 15;
        strengths.push("Outstanding athletics");
      }

      // Social life match
      const socialMapping: Record<string, string> = {
        'very-active': 'Very Active',
        'active': 'Active',
        'moderate': 'Balanced',
        'quiet': 'Intellectual'
      };
      if (school.socialLife === socialMapping[surveyData.socialLife]) {
        score += 10;
        strengths.push("Great social fit");
      }

      // Location bonus (simplified)
      if (surveyData.location !== 'no-preference') {
        score += 5;
        strengths.push("Good location");
      }

      // Random factors for variety
      score += Math.random() * 10;

      return {
        ...school,
        matchScore: Math.min(100, Math.round(score)),
        strengths
      };
    });

    // Return top 5 sorted by score
    return scoredSchools
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 5);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <Card className="w-96">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Analyzing your preferences...</p>
            <p className="text-sm text-gray-500 mt-2">Finding your perfect school matches</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Your Top 5 School Matches</h1>
          <p className="text-gray-600 text-lg">Based on your survey responses, here are schools that fit your preferences</p>
        </div>

        <div className="space-y-6">
          {recommendations.map((school, index) => (
            <Card key={school.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                      <span className="text-xl font-bold text-blue-600">#{index + 1}</span>
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-blue-800">{school.name}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{school.location}</span>
                        </div>
                        <Badge variant="outline">{school.division}</Badge>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{school.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-2xl font-bold text-green-600">
                      <Star className="w-6 h-6 fill-current" />
                      <span>{school.matchScore}%</span>
                    </div>
                    <p className="text-sm text-gray-500">Match Score</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Academics</p>
                      <p className="text-sm text-gray-600">{school.academics}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold">Athletics</p>
                      <p className="text-sm text-gray-600">{school.athletics}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-semibold">Campus</p>
                      <p className="text-sm text-gray-600">{school.campus}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="font-semibold">Social Life</p>
                      <p className="text-sm text-gray-600">{school.socialLife}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Why this school matches you:</p>
                  <div className="flex flex-wrap gap-2">
                    {school.strengths.map((strength, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-600">Want to explore more options or retake the survey?</p>
          <div className="flex justify-center gap-4">
            <Link to="/athlete-survey">
              <Button variant="outline" size="lg">Retake Survey</Button>
            </Link>
            <Link to="/browse">
              <Button size="lg">Browse All Schools</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyResults;
