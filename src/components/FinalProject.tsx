
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, FileVideo, UserCheck } from 'lucide-react';

const FinalProject = () => {
  return (
    <section id="final-project" className="py-16 md:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Final Project</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            User testing and prototyping for improved educational technology solutions
          </p>
        </motion.div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">College Cents: Personal Finance Learning App</CardTitle>
            <CardDescription>
              An educational app helping college students master personal finance skills
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              <Card className="col-span-1 project-card">
                <CardHeader>
                  <CardTitle className="text-lg">Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    College Cents is a mobile-friendly interactive web app designed to teach college students 
                    (ages 18-24) the basics of personal finance, including budgeting, saving, and understanding credit.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    The app features two main components: a Budget Builder for guided monthly budgeting and a Learn Mode 
                    offering modules on credit, taxes, investments, insurance, and more.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-medium">Learning Outcomes:</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Build and manage a simple monthly budget tailored to college lifestyle</li>
                      <li>Develop financial literacy across core personal finance concepts</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 project-card">
                <CardHeader>
                  <CardTitle className="text-lg">Initial Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The initial design was inspired by popular apps like Mint, Duolingo, Headspace, and Quizlet,
                    focusing on a clean interface, gamification elements, and bite-sized learning modules.
                  </p>
                  <div className="flex justify-center mt-6">
                    <img 
                      src="/lovable-uploads/bacfc2c9-f744-4b05-b9be-77d19b6138f8.png" 
                      alt="Initial Sketch" 
                      className="rounded-lg shadow-md max-h-80 object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 project-card">
                <CardHeader>
                  <CardTitle className="text-lg">Prototype Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Link className="h-5 w-5 text-primary" />
                    <a 
                      href="https://www.figma.com/proto/oYETuTBt0jfTaNK5Seo54z/CS-6460-Final-Project-Final-Prototype?node-id=6-210&p=f&t=AG3cn4gGLPm54Fni-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A210" 
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Final Prototype (Present Mode)
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Link className="h-5 w-5 text-primary" />
                    <a 
                      href="https://www.figma.com/proto/YV5pXEiywNPxagwEJzBs9T/CS-6460-Final-Project---Personal-Finance-Tool-for-College-Students?node-id=6-210&starting-point-node-id=6%3A210&t=gKZ3zdir72mQkPmc-1" 
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Previous Prototype
                    </a>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-medium mb-3">User Test Videos:</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <FileVideo className="h-5 w-5 text-primary" />
                        <a 
                          href="https://drive.google.com/file/d/1dwVBhFl5ZQQg0XiQXGvnoD0CyRIA0yMs/view?usp=sharing" 
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          User Test 1 (Aabid)
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <FileVideo className="h-5 w-5 text-primary" />
                        <a 
                          href="https://drive.google.com/file/d/1Gmc5olPrum-uV6ecWVNRyP9xQbcxiz_o/view?usp=sharing" 
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          User Test 2 (Samuel)
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <FileVideo className="h-5 w-5 text-primary" />
                        <a 
                          href="https://drive.google.com/file/d/1TkwUdXgD2WQI-OMcr7aHbu9Y_evmA4Eb/view?usp=sharing" 
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          User Test 3 (Pranav)
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6">User Test Insights</h3>
              <Tabs defaultValue="user1" className="w-full">
                <TabsList className="grid grid-cols-1 md:grid-cols-4 mb-6">
                  <TabsTrigger value="user1">User 1 (Aabid)</TabsTrigger>
                  <TabsTrigger value="user2">User 2 (Samuel)</TabsTrigger>
                  <TabsTrigger value="user3">User 3 (Pranav)</TabsTrigger>
                  <TabsTrigger value="ta">TA Feedback</TabsTrigger>
                </TabsList>
                
                <TabsContent value="user1" className="border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-semibold mb-4">User Test 1: Aabid</h3>
                      <p className="text-muted-foreground mb-4">
                        When Aabid dug into the Budget Builder feature, he liked seeing the monthly breakdown but didn't understand 
                        why it defaulted to a 50/30/20 split. He also wanted to be able to tweak those numbers and see the impact immediately.
                      </p>
                    </div>
                    <div className="md:w-1/2">
                      <h4 className="font-medium mb-3">Implementation Changes:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Adding a three-step coaching overlay ("Pay Yourself First," "Cover Essentials," "Fun Money") before the budget table</li>
                        <li>Implementing budget analysis for feedback-based learning</li>
                        <li>Adding budget editing functionality</li>
                        <li>Adding bank account connection option</li>
                        <li>Improving clarity of insights and recommendations</li>
                      </ul>
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground italic">
                          These changes will better support kinesthetic learners who "learn by doing."
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="user2" className="border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-semibold mb-4">User Test 2: Samuel</h3>
                      <p className="text-muted-foreground mb-4">
                        Samuel found the Insights/Recommendations panel too cramped and pointed out that True/False and 
                        single-answer quizzes still used multi-select checkboxes, creating confusion.
                      </p>
                    </div>
                    <div className="md:w-1/2">
                      <h4 className="font-medium mb-3">Implementation Changes:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Reorganizing insights panel into clear left/right columns under the budget table</li>
                        <li>Increasing font size throughout the app</li>
                        <li>Adding more white space to improve readability</li>
                        <li>Replacing checkboxes with radio buttons for single-answer questions</li>
                      </ul>
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground italic">
                          These changes will improve the overall user experience and reduce confusion.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="user3" className="border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-semibold mb-4">User Test 3: Pranav</h3>
                      <p className="text-muted-foreground mb-4">
                        Pranav liked the color cues but didn't know what red, blue, and green meant, and he wanted 
                        clearer labels for progress on the modules as well as the "3-Day Streak" gamification.
                      </p>
                    </div>
                    <div className="md:w-1/2">
                      <h4 className="font-medium mb-3">Implementation Changes:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Making color cues more explicit with clear legends</li>
                        <li>Adding clear labels to the streak banner before Learn Mode</li>
                        <li>Improving module progress bar labeling</li>
                        <li>Consistently increasing padding and type size across all screens</li>
                      </ul>
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground italic">
                          These changes will make every screen feel spacious and self-explanatory.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="ta" className="border rounded-lg p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-semibold mb-4">TA Feedback</h3>
                      <p className="text-muted-foreground mb-4">
                        The TA reminded me that Learn Mode needs actual teaching content, not just quizzes.
                        This feedback emphasized the need for structured educational content.
                      </p>
                    </div>
                    <div className="md:w-1/2">
                      <h4 className="font-medium mb-3">Implementation Changes:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Adding 1-3 minute mini-lesson videos to each module</li>
                        <li>Including text and visual walkthroughs that break concepts into bite-sized segments</li>
                        <li>Implementing "Try It Yourself" quiz questions based on taught content</li>
                        <li>Adding instant correctness feedback</li>
                        <li>Including recaps that reinforce key takeaways</li>
                      </ul>
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground italic">
                          These changes will target both auditory and visual learners while applying learning science 
                          principles like segmenting complex content into short chunks.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Development Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="project-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Target Audience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-2 mb-4">
                      <UserCheck className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="text-muted-foreground">
                          College students (age 18-24) who need to learn personal finance basics like budgeting, 
                          saving, and understanding credit.
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      I chose this demographic because many college students lack proper financial education 
                      despite making significant financial decisions during this period of their lives.
                    </p>
                    
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Early User Feedback:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><span className="font-medium">Aabid (22, M, recent graduate):</span> Emphasized need for realism in budget simulation</li>
                        <li><span className="font-medium">Emily (20, F, sophomore):</span> Suggested adding brief recaps after lessons</li>
                        <li><span className="font-medium">Shreyas (19, M, freshman):</span> Valued conversational language and positive reinforcement</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="project-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Design Inspirations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li>
                        <div className="font-medium mb-1">Mint</div>
                        <p className="text-sm text-muted-foreground">Clear financial dashboard layout to help easily visualize and track budgets/expenses</p>
                      </li>
                      <li>
                        <div className="font-medium mb-1">Duolingo</div>
                        <p className="text-sm text-muted-foreground">Gamification elements like streak tracking to make learning rewarding</p>
                      </li>
                      <li>
                        <div className="font-medium mb-1">Headspace</div>
                        <p className="text-sm text-muted-foreground">Clean, calming UI and friendly voice to reduce financial anxiety</p>
                      </li>
                      <li>
                        <div className="font-medium mb-1">Quizlet Learn Mode</div>
                        <p className="text-sm text-muted-foreground">Short, adaptive lesson format for teaching financial literacy</p>
                      </li>
                    </ul>
                    
                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Learning Science Principles:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Segmenting Principle: Short, digestible modules</li>
                        <li>Modality Principle: Mixed visual and auditory content</li>
                        <li>Feedback Principle: Instant, personalized guidance</li>
                        <li>Self-Directed Learning: Progress dashboards and choice-based pathways</li>
                        <li>Motivation through autonomy, competence, and social connection</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalProject;
