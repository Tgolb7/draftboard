import { Users, Award, UserCheck, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              {" "}CollegeSportsRater
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect coaches with talented athletes. Rate programs, find opportunities, and build the future of college sports together.
          </p>

          {/* Login Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Coach/Recruiter Card */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-800">Coach / Recruiter</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 mb-6">
                  Find talented athletes, post roster openings, and build championship teams.
                </p>
                
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Clipboard className="w-4 h-4" />
                    <span>Post available roster spots</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Scout athlete profiles</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Manage team recruitment</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full">
                    Sign In as Coach
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    Register as Coach
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Athlete Card */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-green-300">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Student Athlete</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 mb-6">
                  Showcase your skills, find opportunities, and rate your college sports experience.
                </p>
                
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Create athlete profile</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Find roster opportunities</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clipboard className="w-4 h-4" />
                    <span>Rate college programs</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    Sign In as Athlete
                  </Button>
                  <Button size="lg" variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    Register as Athlete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Browse as Guest */}
          <div className="mt-12">
            <p className="text-gray-600 mb-4">Or explore without signing in:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/browse">
                <Button variant="outline" size="lg">
                  Browse College Programs
                </Button>
              </Link>
              <Link to="/player-board">
                <Button variant="outline" size="lg">
                  View Player Portal
                </Button>
              </Link>
              <Link to="/job-board">
                <Button variant="outline" size="lg">
                  See Team Openings
                </Button>
              </Link>
              <Link to="/athlete-survey">
                <Button variant="outline" size="lg" className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200">
                  🎯 Find My Perfect School
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-gray-600">College Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">Student Athletes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">25,000+</div>
              <div className="text-gray-600">Program Reviews</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
