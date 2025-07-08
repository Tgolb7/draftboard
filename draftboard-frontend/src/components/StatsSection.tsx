
import { TrendingUp, Users, Star, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Student Athletes",
      description: "Active reviewers rating their programs"
    },
    {
      icon: Star,
      value: "4.2/5",
      label: "Average Rating",
      description: "Based on verified student reviews"
    },
    {
      icon: Award,
      value: "1,200+",
      label: "College Programs",
      description: "Across all sports and divisions"
    },
    {
      icon: TrendingUp,
      value: "25+",
      label: "Sports Categories",
      description: "From football to swimming and more"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Most Comprehensive College Sports Database
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get honest reviews from current and former student-athletes about their college sports experiences across all programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</h4>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
