
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GroupProject = () => {
  return (
    <section id="group-project" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Group Project</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Redesigning the Anki app with innovative AI-powered features
          </p>
        </motion.div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Figma Redesign Project</CardTitle>
            <CardDescription>
              <a 
                href="https://www.figma.com/proto/21h5fGXnvhJBbGaxlf3EDX/Figma-0---Motivation-19?node-id=0-1&t=ACgJsKxDOI4BqN0t-1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center"
              >
                View Figma Prototype
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <p className="text-muted-foreground mb-4">
                  Our team redesigned the Anki app, enhancing it with AI-powered features to make studying more efficient, 
                  engaging, and effective. The redesign focuses on improving user experience, providing actionable 
                  insights, and creating more collaborative study environments.
                </p>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Key Innovation Areas:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>AI-powered study analytics</li>
                    <li>Optimal study scheduling</li>
                    <li>Collaborative deck creation</li>
                    <li>AI-generated flashcards</li>
                    <li>Gamification & reward systems</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center items-center">
                <img 
                  src="/lovable-uploads/e54eaf29-d99a-43e2-b001-98494855eae5.png" 
                  alt="Design Challenges" 
                  className="rounded-lg shadow-md max-h-80 object-contain"
                />
              </div>
            </div>
            
            <div className="mt-12">
              <Tabs defaultValue="analytics" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6">
                  <TabsTrigger value="analytics">User Study Analytics</TabsTrigger>
                  <TabsTrigger value="scheduling">AI Study Scheduling</TabsTrigger>
                  <TabsTrigger value="shared">Shared Decks</TabsTrigger>
                  <TabsTrigger value="ai-decks">AI Generated Decks</TabsTrigger>
                  <TabsTrigger value="gamification">Gamification</TabsTrigger>
                </TabsList>
                
                <TabsContent value="analytics" className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">User Study Analytics Feature</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        This feature, which I focused on developing, leverages AI to break down and analyze study statistics 
                        for each deck. Unlike traditional Anki statistics that can be overwhelming, our redesign provides 
                        actionable insights tailored to improve study efficiency.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        The analytics system identifies weak areas, prioritizes difficult concepts, and directs users to specific 
                        sets they need to focus on, increasing motivation by providing clear direction rather than raw statistics.
                      </p>
                      <p className="font-medium">
                        Key benefits:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>Personalized study recommendations</li>
                        <li>Focus on high-priority topics</li>
                        <li>Actionable insights rather than overwhelming data</li>
                        <li>Increased motivation through directed learning</li>
                      </ul>
                    </div>
                    <div className="flex justify-center items-center">
                      <img 
                        src="/lovable-uploads/9361d9c7-48db-4cc7-b805-0b5b06741038.png" 
                        alt="Analytics Feature" 
                        className="rounded-lg shadow-md max-h-80 object-contain"
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="scheduling" className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">AI-Based Suggestions for Optimal Study Scheduling</h3>
                  <p className="text-muted-foreground mb-4">
                    Our AI-powered study scheduling takes Anki beyond traditional spaced repetition. The system analyzes 
                    user habits and performance to optimize review times, adjusting based on which cards a user struggles 
                    with most.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The scheduling algorithm prioritizes difficult concepts while spacing out easier ones, making learning 
                    more efficient and helping users retain information faster. The feature also includes intelligent 
                    reminders across all interfaces to ensure a smoother learning experience.
                  </p>
                </TabsContent>
                
                <TabsContent value="shared" className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Creating Shared Decks</h3>
                  <p className="text-muted-foreground mb-4">
                    Traditional Anki doesn't support collaborative deck creation and maintenance. Our redesign introduces 
                    shared decks that can be edited and maintained by multiple people simultaneously.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    This feature enables study groups to edit cards, manage other users in the group, and see changes in 
                    real-time, making Anki much more effective for collaborative learning environments like classrooms 
                    or study groups.
                  </p>
                </TabsContent>
                
                <TabsContent value="ai-decks" className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">AI Generated Decks</h3>
                  <p className="text-muted-foreground mb-4">
                    Users can now upload their notes, and our AI system parses through them to automatically create a deck 
                    of flashcards organized into logical sections. This dramatically reduces the time needed to create 
                    study materials.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    After generation, users can edit the AI-created deck by adding, modifying, or deleting cards. The system 
                    even includes an AI-powered card creation feature where users can request specific definitions or concepts 
                    they want to include.
                  </p>
                </TabsContent>
                
                <TabsContent value="gamification" className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Gamification & Rewards</h3>
                  <p className="text-muted-foreground mb-4">
                    To increase engagement and motivation, we've added gamification elements to the Anki experience. Users earn 
                    in-app currency solely by completing cards, which they can spend on cosmetic items like avatars, app icons, 
                    and card animations.
                  </p>
                  <p className="text-muted-foreground">
                    The system also tracks streaks and awards badges for consistency and achievements. A social element allows 
                    users to see their friends' streaks and badges, adding healthy competition to the learning process.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pt-6">
            <img 
              src="/lovable-uploads/16418ff5-8c8b-4475-a7a9-0e92f15fb9d2.png" 
              alt="Analytics Dashboard" 
              className="rounded-lg shadow-md max-h-96 object-contain"
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default GroupProject;
