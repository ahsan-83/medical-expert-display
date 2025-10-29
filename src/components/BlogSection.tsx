import React from "react";
import { BookOpen, Video, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BlogSection = () => {
  const articles = [
    {
      title: "Understanding Heart Health: A Comprehensive Guide",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Heart Health",
      excerpt: "Learn about the fundamentals of cardiovascular health, risk factors, and preventive measures to maintain a healthy heart throughout your life.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop"
    },
    {
      title: "Latest Advances in Minimally Invasive Cardiac Procedures",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Medical Innovation",
      excerpt: "Discover the cutting-edge techniques in interventional cardiology that reduce recovery time and improve patient outcomes.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop"
    },
    {
      title: "Managing Cholesterol: Diet and Lifestyle Tips",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Prevention",
      excerpt: "Practical advice on managing cholesterol levels through dietary changes, exercise, and lifestyle modifications.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop"
    },
    {
      title: "Heart Attack Warning Signs You Shouldn't Ignore",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Emergency Care",
      excerpt: "Critical information about recognizing early warning signs of heart attacks and when to seek immediate medical attention.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&auto=format&fit=crop"
    }
  ];

  const videos = [
    {
      title: "What to Expect During a Cardiac Catheterization",
      date: "March 12, 2024",
      duration: "12:45",
      category: "Patient Education",
      description: "A detailed walkthrough of the cardiac catheterization procedure, preparation, and recovery process.",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop"
    },
    {
      title: "Heart-Healthy Cooking Demonstration",
      date: "March 8, 2024",
      duration: "18:30",
      category: "Lifestyle",
      description: "Join me as I demonstrate how to prepare delicious, heart-healthy meals that support cardiovascular wellness.",
      thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop"
    },
    {
      title: "Understanding Your ECG Results",
      date: "March 1, 2024",
      duration: "10:20",
      category: "Medical Education",
      description: "Learn how to interpret basic ECG patterns and what different readings mean for your heart health.",
      thumbnail: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&auto=format&fit=crop"
    },
    {
      title: "Exercise After Heart Surgery: A Recovery Guide",
      date: "February 25, 2024",
      duration: "15:15",
      category: "Recovery",
      description: "Safe exercise protocols and rehabilitation guidelines for patients recovering from cardiac procedures.",
      thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="blog" className="section-container bg-gray-50">
      <h2 className="section-title">Health Resources & Media</h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
        Educational content, latest research insights, and practical health tips from Dr. Smith
      </p>

      <Tabs defaultValue="articles" className="w-full">
        <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-8">
          <TabsTrigger value="articles" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Articles
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            Videos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="articles">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                  <CardTitle className="text-xl hover:text-doctor-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{article.excerpt}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48 overflow-hidden group">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Video className="h-8 w-8 text-doctor-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{video.category}</Badge>
                  </div>
                  <CardTitle className="text-xl hover:text-doctor-600 transition-colors">
                    {video.title}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {video.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{video.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default BlogSection;
