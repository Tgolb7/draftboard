
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

interface SurveyData {
  division: string;
  schoolSize: string;
  educationLevel: string;
  dormQuality: string;
  athleticFacilities: string;
  sportsculture: string;
  location: string;
  academicFocus: string;
  socialLife: string;
  coachingStyle: string;
}

const AthleteSurvey = () => {
  const navigate = useNavigate();
  const [surveyData, setSurveyData] = useState<SurveyData>({
    division: '',
    schoolSize: '',
    educationLevel: '',
    dormQuality: '',
    athleticFacilities: '',
    sportsculture: '',
    location: '',
    academicFocus: '',
    socialLife: '',
    coachingStyle: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store survey data in localStorage for the results page
    localStorage.setItem('athleteSurveyData', JSON.stringify(surveyData));
    navigate('/survey-results');
  };

  const updateSurveyData = (field: keyof SurveyData, value: string) => {
    setSurveyData(prev => ({ ...prev, [field]: value }));
  };

  const isFormComplete = Object.values(surveyData).every(value => value !== '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-blue-800 mb-4">Find Your Perfect School</CardTitle>
            <p className="text-gray-600">Answer these questions to get personalized school recommendations</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Division Preference */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">What division do you prefer?</Label>
                <RadioGroup 
                  value={surveyData.division} 
                  onValueChange={(value) => updateSurveyData('division', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="d1" id="d1" />
                    <Label htmlFor="d1">Division I</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="d2" id="d2" />
                    <Label htmlFor="d2">Division II</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="d3" id="d3" />
                    <Label htmlFor="d3">Division III</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="naia" id="naia" />
                    <Label htmlFor="naia">NAIA</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* School Size */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Preferred school size?</Label>
                <Select onValueChange={(value) => updateSurveyData('schoolSize', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select school size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (Under 5,000)</SelectItem>
                    <SelectItem value="medium">Medium (5,000-15,000)</SelectItem>
                    <SelectItem value="large">Large (15,000-30,000)</SelectItem>
                    <SelectItem value="very-large">Very Large (30,000+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Education Level */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">How important is academic reputation?</Label>
                <RadioGroup 
                  value={surveyData.educationLevel} 
                  onValueChange={(value) => updateSurveyData('educationLevel', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very-important" id="edu-very" />
                    <Label htmlFor="edu-very">Very Important - Top-tier academics</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="important" id="edu-important" />
                    <Label htmlFor="edu-important">Important - Good academics</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moderate" id="edu-moderate" />
                    <Label htmlFor="edu-moderate">Moderate - Average academics</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not-priority" id="edu-not" />
                    <Label htmlFor="edu-not">Not a Priority</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Dorm Quality */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">How important are quality dorms/housing?</Label>
                <RadioGroup 
                  value={surveyData.dormQuality} 
                  onValueChange={(value) => updateSurveyData('dormQuality', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very-important" id="dorm-very" />
                    <Label htmlFor="dorm-very">Very Important</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="important" id="dorm-important" />
                    <Label htmlFor="dorm-important">Important</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moderate" id="dorm-moderate" />
                    <Label htmlFor="dorm-moderate">Moderate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not-important" id="dorm-not" />
                    <Label htmlFor="dorm-not">Not Important</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Athletic Facilities */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">How important are top-tier athletic facilities?</Label>
                <RadioGroup 
                  value={surveyData.athleticFacilities} 
                  onValueChange={(value) => updateSurveyData('athleticFacilities', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very-important" id="athletic-very" />
                    <Label htmlFor="athletic-very">Very Important</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="important" id="athletic-important" />
                    <Label htmlFor="athletic-important">Important</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moderate" id="athletic-moderate" />
                    <Label htmlFor="athletic-moderate">Moderate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not-important" id="athletic-not" />
                    <Label htmlFor="athletic-not">Not Important</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Sports Culture */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">What kind of sports culture do you prefer?</Label>
                <RadioGroup 
                  value={surveyData.sportsculture} 
                  onValueChange={(value) => updateSurveyData('sportsculture', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="highly-competitive" id="culture-competitive" />
                    <Label htmlFor="culture-competitive">Highly Competitive</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="competitive" id="culture-moderate" />
                    <Label htmlFor="culture-moderate">Competitive</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="balanced" id="culture-balanced" />
                    <Label htmlFor="culture-balanced">Balanced</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="relaxed" id="culture-relaxed" />
                    <Label htmlFor="culture-relaxed">Relaxed/Fun-focused</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Preferred location?</Label>
                <Select onValueChange={(value) => updateSurveyData('location', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="northeast">Northeast</SelectItem>
                    <SelectItem value="southeast">Southeast</SelectItem>
                    <SelectItem value="midwest">Midwest</SelectItem>
                    <SelectItem value="southwest">Southwest</SelectItem>
                    <SelectItem value="west">West Coast</SelectItem>
                    <SelectItem value="no-preference">No Preference</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Academic Focus */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Preferred academic focus?</Label>
                <Select onValueChange={(value) => updateSurveyData('academicFocus', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select academic focus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="liberal-arts">Liberal Arts</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="engineering">Engineering/STEM</SelectItem>
                    <SelectItem value="health-sciences">Health Sciences</SelectItem>
                    <SelectItem value="communications">Communications/Media</SelectItem>
                    <SelectItem value="undecided">Undecided</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Social Life */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">What kind of social environment do you prefer?</Label>
                <RadioGroup 
                  value={surveyData.socialLife} 
                  onValueChange={(value) => updateSurveyData('socialLife', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="very-active" id="social-very" />
                    <Label htmlFor="social-very">Very Active - Lots of parties/events</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="active" id="social-active" />
                    <Label htmlFor="social-active">Active - Regular social events</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moderate" id="social-moderate" />
                    <Label htmlFor="social-moderate">Moderate - Balanced social life</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="quiet" id="social-quiet" />
                    <Label htmlFor="social-quiet">Quiet - Study-focused</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Coaching Style */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">What coaching style do you prefer?</Label>
                <RadioGroup 
                  value={surveyData.coachingStyle} 
                  onValueChange={(value) => updateSurveyData('coachingStyle', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="demanding" id="coach-demanding" />
                    <Label htmlFor="coach-demanding">Demanding/Intense</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="structured" id="coach-structured" />
                    <Label htmlFor="coach-structured">Structured/Disciplined</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="supportive" id="coach-supportive" />
                    <Label htmlFor="coach-supportive">Supportive/Encouraging</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="coach-flexible" />
                    <Label htmlFor="coach-flexible">Flexible/Player-focused</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full" 
                disabled={!isFormComplete}
              >
                Get My School Recommendations
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AthleteSurvey;
