import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Bot, 
  DoorOpen, 
  DoorClosed, 
  HelpCircle, 
  CloudUpload, 
  ClipboardCheck, 
  Cog, 
  Rocket, 
  Bug, 
  AlertCircle, 
  CheckCircle, 
  BellRing,
  Github,
  Info
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="bg-[#36393F] text-[#DCDDDE] min-h-screen">
      {/* Header */}
      <header className="bg-[#2F3136] py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="text-white text-2xl font-bold flex items-center">
              <Bot className="h-8 w-8 text-[#5865F2] mr-3" />
              <span>Welcome Companion</span>
            </div>
            <span className="bg-[#5865F2] text-white text-xs px-2 py-1 rounded-full">Discord Bot</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-[#DCDDDE] hover:text-white transition">Documentation</a>
            <a href="https://github.com" target="_blank" className="text-[#DCDDDE] hover:text-white transition">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://discord.com" target="_blank" className="text-[#DCDDDE] hover:text-white transition">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {/* Intro Card */}
        <Card className="bg-[#2F3136] rounded-xl mb-8 shadow-lg">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-white mb-4">Welcome Companion Bot</h1>
            <p className="mb-4">This Discord bot detects when users join or leave your server and sends customized welcome and goodbye messages.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-[#36393F] rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <DoorOpen className="h-5 w-5 text-[#57F287] mr-2" />
                  <h3 className="text-lg font-semibold">Welcome Messages</h3>
                </div>
                <p className="text-sm">Automatically greets new members with a customizable welcome message when they join your server.</p>
              </div>
              
              <div className="bg-[#36393F] rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <DoorClosed className="h-5 w-5 text-[#ED4245] mr-2" />
                  <h3 className="text-lg font-semibold">Goodbye Messages</h3>
                </div>
                <p className="text-sm">Sends farewell messages when members leave your server to keep your community informed.</p>
              </div>
              
              <div className="bg-[#36393F] rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <HelpCircle className="h-5 w-5 text-[#5865F2] mr-2" />
                  <h3 className="text-lg font-semibold">Command Prefix</h3>
                </div>
                <p className="text-sm">Uses "?" as the command prefix for all bot commands.</p>
              </div>
              
              <div className="bg-[#36393F] rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <CloudUpload className="h-5 w-5 text-[#FEE75C] mr-2" />
                  <h3 className="text-lg font-semibold">Railway Deployment</h3>
                </div>
                <p className="text-sm">Easily deploy on Railway.com with proper environment variable configuration.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Setup Tabs */}
        <Tabs defaultValue="prerequisites" className="mb-8">
          <TabsList className="flex overflow-x-auto mb-4 border-b border-gray-700 bg-transparent">
            <TabsTrigger value="prerequisites" className="px-5 py-3 font-medium data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-[#5865F2] data-[state=inactive]:text-gray-400 data-[state=inactive]:hover:text-white bg-transparent">
              <ClipboardCheck className="mr-2 h-4 w-4" />
              Prerequisites
            </TabsTrigger>
            <TabsTrigger value="environment" className="px-5 py-3 font-medium data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-[#5865F2] data-[state=inactive]:text-gray-400 data-[state=inactive]:hover:text-white bg-transparent">
              <Cog className="mr-2 h-4 w-4" />
              Environment Setup
            </TabsTrigger>
            <TabsTrigger value="deployment" className="px-5 py-3 font-medium data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-[#5865F2] data-[state=inactive]:text-gray-400 data-[state=inactive]:hover:text-white bg-transparent">
              <Rocket className="mr-2 h-4 w-4" />
              Deployment
            </TabsTrigger>
            <TabsTrigger value="troubleshooting" className="px-5 py-3 font-medium data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-[#5865F2] data-[state=inactive]:text-gray-400 data-[state=inactive]:hover:text-white bg-transparent">
              <Bug className="mr-2 h-4 w-4" />
              Troubleshooting
            </TabsTrigger>
          </TabsList>

          {/* Prerequisites Tab */}
          <TabsContent value="prerequisites">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-[#2F3136] rounded-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Discord Developer Setup</h3>
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <div className="font-semibold text-white">Create a Discord Application</div>
                      <p className="text-sm mt-1">Go to the <a href="https://discord.com/developers/applications" target="_blank" className="text-[#5865F2] hover:underline">Discord Developer Portal</a> and create a new application.</p>
                    </li>
                    <li>
                      <div className="font-semibold text-white">Set up a Bot User</div>
                      <p className="text-sm mt-1">Navigate to the "Bot" tab and click "Add Bot" to create a bot user for your application.</p>
                    </li>
                    <li>
                      <div className="font-semibold text-white">Configure Bot Permissions</div>
                      <p className="text-sm mt-1">Under the bot settings, enable the following intents:</p>
                      <ul className="list-disc pl-5 mt-2 text-sm">
                        <li>Presence Intent</li>
                        <li>Server Members Intent</li>
                        <li>Message Content Intent</li>
                      </ul>
                    </li>
                    <li>
                      <div className="font-semibold text-white">Get Your Bot Token</div>
                      <p className="text-sm mt-1">Click "Reset Token" to generate a new token. Copy and save this token securely - you'll need it for the next steps.</p>
                      <div className="bg-[#36393F] p-3 rounded mt-2 flex items-center">
                        <code className="text-xs text-gray-300 flex-grow">XXXX.YYYY.ZZZZ</code>
                        <span className="text-xs text-[#FEE75C]">Never share your token</span>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-[#2F3136] rounded-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Railway.com Setup</h3>
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <div className="font-semibold text-white">Create a Railway Account</div>
                      <p className="text-sm mt-1">Sign up for an account at <a href="https://railway.app" target="_blank" className="text-[#5865F2] hover:underline">Railway.app</a> if you haven't already.</p>
                    </li>
                    <li>
                      <div className="font-semibold text-white">Create a New Project</div>
                      <p className="text-sm mt-1">Create a new project in Railway dashboard, selecting "Deploy from GitHub repository".</p>
                    </li>
                    <li>
                      <div className="font-semibold text-white">Repository Setup</div>
                      <p className="text-sm mt-1">Make sure your code is hosted in a GitHub repository. It should include:</p>
                      <ul className="list-disc pl-5 mt-2 text-sm">
                        <li>A proper package.json file with dependencies</li>
                        <li>Required bot code (index.js and other modules)</li>
                        <li>A start script in your package.json</li>
                      </ul>
                    </li>
                    <li>
                      <div className="font-semibold text-white">Connect GitHub Repository</div>
                      <p className="text-sm mt-1">Select and connect your GitHub repository that contains the bot code.</p>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Environment Setup Tab */}
          <TabsContent value="environment">
            <Card className="bg-[#2F3136] rounded-lg mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Railway Environment Variables</h3>
                <p className="mb-4">Configure these environment variables in your Railway dashboard to properly run your bot:</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-[#36393F]">
                      <tr>
                        <th scope="col" className="px-6 py-3 rounded-l-lg">Variable Name</th>
                        <th scope="col" className="px-6 py-3">Value</th>
                        <th scope="col" className="px-6 py-3 rounded-r-lg">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#36393F]/50">
                        <td className="px-6 py-4 font-medium">BOT_TOKEN</td>
                        <td className="px-6 py-4 text-[#FEE75C]">Your Discord Bot Token</td>
                        <td className="px-6 py-4">The token from Discord Developer Portal</td>
                      </tr>
                      <tr className="bg-[#36393F]/50">
                        <td className="px-6 py-4 font-medium">PREFIX</td>
                        <td className="px-6 py-4 text-[#57F287]">?</td>
                        <td className="px-6 py-4">Command prefix used to interact with the bot</td>
                      </tr>
                      <tr className="bg-[#36393F]/50">
                        <td className="px-6 py-4 font-medium">WELCOME_CHANNEL</td>
                        <td className="px-6 py-4">welcome</td>
                        <td className="px-6 py-4">Channel name where welcome messages will be sent</td>
                      </tr>
                      <tr className="bg-[#36393F]/50">
                        <td className="px-6 py-4 font-medium">GOODBYE_CHANNEL</td>
                        <td className="px-6 py-4">goodbye</td>
                        <td className="px-6 py-4">Channel name where goodbye messages will be sent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-[#2F3136] rounded-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Set Environment Variables in Railway</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-sm">
                    <li>Navigate to your project in the Railway dashboard</li>
                    <li>Click on the "Variables" tab</li>
                    <li>Click "New Variable" and add each environment variable</li>
                    <li>Make sure the variable names match exactly as shown in the table</li>
                    <li>Click "Add" after entering each variable</li>
                  </ol>
                  <div className="mt-4 bg-yellow-900/30 text-[#FEE75C] p-3 rounded-md text-sm">
                    <AlertCircle className="inline-block mr-2 h-4 w-4" />
                    Environment variables are case-sensitive!
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#2F3136] rounded-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Required package.json Configuration</h3>
                  <p className="text-sm mb-3">Make sure your package.json has the correct configuration:</p>
                  <div className="bg-[#36393F]/70 p-4 rounded-md font-mono text-xs text-gray-300 overflow-x-auto">
<pre>{`{
  "name": "welcome-companion",
  "version": "1.0.0",
  "description": "Discord welcome/goodbye bot",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "discord.js": "^14.8.0",
    "dotenv": "^16.0.3"
  },
  "engines": {
    "node": ">=16.9.0"
  }
}`}</pre>
                  </div>
                  <div className="mt-4 bg-blue-900/30 text-[#5865F2] p-3 rounded-md text-sm">
                    <Info className="inline-block mr-2 h-4 w-4" />
                    The "start" script is essential for Railway deployment
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Deployment Tab */}
          <TabsContent value="deployment">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8">
                <Card className="bg-[#2F3136] rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Deployment Steps</h3>
                    
                    <div className="relative">
                      <div className="absolute left-4 h-full w-0.5 bg-[#36393F]"></div>
                      
                      <div className="relative pl-10 pb-8">
                        <div className="absolute left-2 -top-1 h-8 w-8 rounded-full bg-[#5865F2] flex items-center justify-center text-white font-bold">1</div>
                        <h4 className="text-lg font-semibold text-white">Push Your Code to GitHub</h4>
                        <p className="mt-2 text-sm">Make sure your code is up to date in your GitHub repository.</p>
                        <div className="bg-[#36393F]/70 mt-3 p-3 rounded-md font-mono text-xs text-gray-300">
                          <pre>git add .
git commit -m "Prepare bot for Railway deployment"
git push origin main</pre>
                        </div>
                      </div>
                      
                      <div className="relative pl-10 pb-8">
                        <div className="absolute left-2 -top-1 h-8 w-8 rounded-full bg-[#5865F2] flex items-center justify-center text-white font-bold">2</div>
                        <h4 className="text-lg font-semibold text-white">Configure Railway Project</h4>
                        <p className="mt-2 text-sm">In your Railway dashboard, ensure these settings are configured:</p>
                        <ul className="list-disc pl-5 mt-2 text-sm space-y-2">
                          <li>Environment variables are set correctly</li>
                          <li>GitHub repository is connected</li>
                          <li>Deployment branch is selected (usually main)</li>
                        </ul>
                      </div>
                      
                      <div className="relative pl-10 pb-8">
                        <div className="absolute left-2 -top-1 h-8 w-8 rounded-full bg-[#5865F2] flex items-center justify-center text-white font-bold">3</div>
                        <h4 className="text-lg font-semibold text-white">Deploy Your Application</h4>
                        <p className="mt-2 text-sm">Railway will automatically deploy your application when you push to your repository. Alternatively, you can trigger a manual deployment:</p>
                        <ul className="list-disc pl-5 mt-2 text-sm">
                          <li>Go to the "Deployments" section</li>
                          <li>Click "Deploy now" to start a manual deployment</li>
                        </ul>
                      </div>
                      
                      <div className="relative pl-10">
                        <div className="absolute left-2 -top-1 h-8 w-8 rounded-full bg-[#5865F2] flex items-center justify-center text-white font-bold">4</div>
                        <h4 className="text-lg font-semibold text-white">Monitor Deployment Status</h4>
                        <p className="mt-2 text-sm">Watch the deployment logs to ensure your bot starts correctly:</p>
                        <ul className="list-disc pl-5 mt-2 text-sm">
                          <li>Click on the latest deployment</li>
                          <li>Check the logs for any errors</li>
                          <li>Look for confirmation that your bot has connected to Discord</li>
                        </ul>
                        <div className="bg-[#36393F]/70 mt-3 p-3 rounded-md font-mono text-xs text-gray-300">
                          <pre>Welcome Companion is online!
Logged in as WelcomeCompanion#0000
Bot is ready to greet new members!</pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-4 space-y-6">
                <Card className="bg-[#2F3136] rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Railway Start Command</h3>
                    <p className="text-sm mb-3">Railway uses the "start" script in your package.json to run your application.</p>
                    <div className="bg-[#36393F]/70 p-3 rounded-md font-mono text-xs text-gray-300">
                      <pre>{`"scripts": {
  "start": "node index.js"
}`}</pre>
                    </div>
                    <div className="mt-4 bg-green-900/30 text-[#57F287] p-3 rounded-md text-sm">
                      <CheckCircle className="inline-block mr-2 h-4 w-4" />
                      Railway will automatically run this command
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#2F3136] rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Verify Bot Activity</h3>
                    <p className="text-sm mb-3">After deployment, verify your bot is online:</p>
                    <ol className="list-decimal pl-6 space-y-2 text-sm">
                      <li>Check your Discord server</li>
                      <li>Verify the bot appears online</li>
                      <li>Test with a command like <code className="bg-[#36393F]/70 px-1 rounded">?help</code></li>
                      <li>Test join/leave events with a test account</li>
                    </ol>
                    <div className="mt-4 flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#57F287]"></div>
                      <span className="text-sm font-medium">Bot is online when green</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Troubleshooting Tab */}
          <TabsContent value="troubleshooting">
            <Card className="bg-[#2F3136] rounded-lg mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Common Issues and Solutions</h3>
                
                <div className="space-y-6">
                  <div className="bg-[#36393F]/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white flex items-center">
                      <AlertCircle className="text-[#ED4245] mr-2 h-5 w-5" />
                      Bot Not Coming Online
                    </h4>
                    <div className="mt-3 space-y-3">
                      <p className="text-sm">If your bot is not coming online after deployment:</p>
                      <ol className="list-decimal pl-6 text-sm space-y-2">
                        <li>Check deployment logs for any errors</li>
                        <li>Verify the BOT_TOKEN environment variable is set correctly</li>
                        <li>Make sure you've enabled the required bot intents in Discord Developer Portal</li>
                        <li>Check if the package.json has the correct start script</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="bg-[#36393F]/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white flex items-center">
                      <BellRing className="text-[#FEE75C] mr-2 h-5 w-5" />
                      Bot Online But Not Sending Messages
                    </h4>
                    <div className="mt-3 space-y-3">
                      <p className="text-sm">If your bot is online but not sending welcome or goodbye messages:</p>
                      <ol className="list-decimal pl-6 text-sm space-y-2">
                        <li>Check if the welcome/goodbye channels exist in your server</li>
                        <li>Verify that the bot has permissions to see and send messages in those channels</li>
                        <li>Make sure WELCOME_CHANNEL and GOODBYE_CHANNEL variables are set correctly</li>
                        <li>Check if your code is correctly listening to the guild member events</li>
                      </ol>
                      <div className="bg-[#36393F] p-3 rounded mt-2 text-xs font-mono">
                        <code className="text-gray-300">
client.on('guildMemberAdd', member {'=>'} {'{'})<br/>
&nbsp;&nbsp;// Welcome message code<br/>
{'}'}); <br/><br/>
client.on('guildMemberRemove', member {'=>'} {'{'})<br/>
&nbsp;&nbsp;// Goodbye message code<br/>
{'}'});
                        </code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#36393F]/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-white flex items-center">
                      <Rocket className="text-[#5865F2] mr-2 h-5 w-5" />
                      Railway Deployment Failed
                    </h4>
                    <div className="mt-3 space-y-3">
                      <p className="text-sm">If Railway deployment is failing:</p>
                      <ol className="list-decimal pl-6 text-sm space-y-2">
                        <li>Check if your package.json is valid and includes all necessary dependencies</li>
                        <li>Verify that the "engines" field specifies a compatible Node.js version</li>
                        <li>Make sure there are no syntax errors in your code</li>
                        <li>Check for any build errors in the deployment logs</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2F3136] rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Required Code Snippets</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Loading Environment Variables</h4>
                    <div className="bg-[#36393F] p-4 rounded-md font-mono text-xs text-gray-300 overflow-x-auto">
<pre>// index.js
require('dotenv').config();

// Example bot code implementation
// ... rest of bot code</pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Creating the Client with Intents</h4>
                    <div className="bg-[#36393F] p-4 rounded-md font-mono text-xs text-gray-300 overflow-x-auto">
<pre>// index.js
const {'{'} Client, GatewayIntentBits {'}'} = require('discord.js');

const client = new Client({'{'} 
  intents: ['[']
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  {']'}
{'}'});

client.login(process.env.BOT_TOKEN);</pre>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-white mt-6 mb-3">Sample Bot Code Structure</h4>
                <div className="bg-[#36393F] p-4 rounded-md font-mono text-xs text-gray-300 overflow-x-auto">
<pre>// index.js
require('dotenv').config();
const {'{'} Client, GatewayIntentBits, EmbedBuilder {'}'} = require('discord.js');

// Create Discord client
const client = new Client({'{'} 
  intents: ['[']
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  {']'}
{'}'});

const prefix = process.env.PREFIX || '?';

// Bot ready event
client.once('ready', {'()'} {'=>'} {'{'} 
  console.log(`Welcome Companion is online!`);
  console.log(`Logged in as ${'{'} client.user.tag {'}'}`);
  console.log('Bot is ready to greet new members!');
{'}'});

// Welcome message event
client.on('guildMemberAdd', async member {'=>'} {'{'} 
  const welcomeChannel = member.guild.channels.cache.find(
    channel {'=>'} channel.name === process.env.WELCOME_CHANNEL || 'welcome'
  );
  
  if (!welcomeChannel) return;
  
  const welcomeEmbed = new EmbedBuilder()
    .setColor('#5865F2')
    .setTitle('New Member!')
    .setDescription(`Welcome to the server, ${'{'} member {'}'} !`)
    .setThumbnail(member.user.displayAvatarURL())
    .setTimestamp();
    
  welcomeChannel.send({'{'} embeds: ['['] welcomeEmbed {']'} {'}'});
{'}'});

// Goodbye message event
client.on('guildMemberRemove', async member {'=>'} {'{'} 
  const goodbyeChannel = member.guild.channels.cache.find(
    channel {'=>'} channel.name === process.env.GOODBYE_CHANNEL || 'goodbye'
  );
  
  if (!goodbyeChannel) return;
  
  goodbyeChannel.send(`**${'{'} member.user.tag {'}'} ** has left the server. We'll miss you!`);
{'}'});

// Login with token from environment variables
client.login(process.env.BOT_TOKEN);</pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-[#2F3136] py-4 px-6 mt-8">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>Welcome Companion Bot &copy; 2023 - A Discord Bot for Server Greeters</p>
          <div className="flex justify-center space-x-6 mt-3">
            <a href="#" className="text-gray-400 hover:text-[#5865F2] transition">
              <HelpCircle className="inline-block mr-1 h-4 w-4" /> Help
            </a>
            <a href="#" className="text-gray-400 hover:text-[#5865F2] transition">
              <svg className="inline-block mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/></svg> API
            </a>
            <a href="#" className="text-gray-400 hover:text-[#5865F2] transition">
              <svg className="inline-block mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
