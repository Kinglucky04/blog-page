import React from 'react'
import Images from '../Images'
import { Link } from 'react-router-dom'
import PostMenuActions from '../PostMenuActions'
import Search from '../Search'
import Comments from '../Comments'

function SinglePost() {
  return (
    <div className='flex flex-col lg:flex-row gap-8'>
      
      {/* LEFT: POST */}
      <div className='lg:w-[70%] flex flex-col gap-8'>
        
        <h1 className='font-semibold uppercase'>How AI Is Reshaping the Tech Space—and How Developers Can Stay Ahead</h1>

        <div className='flex items-center gap-2 text-gray-400 text-sm'>
          <span>Writen by</span>
          <Link to="/test" className='text-blue-400'>Lucky Pam</Link>
          <span>On</span>
          <Link to="/test" className='text-blue-400'>Web Development</Link>
          <span>2 days ago</span>
        </div>

        <Images 
          src="/ai-nuclear-energy-future-innovation-disruptive-technology.jpg" 
          alt="blockforge" 
          className="rounded-2xl w-full object-cover h-150"
          w="600"
        />
        

        <div className='lg:text-lg flex flex-col gap-6 text-justify'>

        <div class="article max-w-3xl mx-auto px-4 py-8 leading-7">

  <p class="mb-4">
    Artificial Intelligence is no longer a distant concept reserved for research labs or science fiction. It is actively reshaping the technology landscape, redefining how software is built, how businesses operate, and how users interact with digital products.
  </p>

  <p class="mb-4">
    The real question is not whether AI will transform the tech space—it already is—but how developers can adapt and thrive in this rapidly evolving environment.
  </p>

  <h2>AI Isn’t Taking Over—It’s Integrating Everywhere</h2>

  <p class="mb-4">
    There’s a common narrative that AI is “taking over” tech, replacing developers and automating everything in its path. That framing is misleading. AI is not replacing the tech space—it is becoming a foundational layer within it.
  </p>

  <p class="mb-4">
    From code generation tools and automated testing to intelligent user interfaces and data-driven decision-making, AI is being embedded into nearly every aspect of software development.
  </p>

  <p class="mb-4">
    Modern development workflows already reflect this shift. Developers are using AI-powered tools to write boilerplate code faster, debug more efficiently, and even generate entire features from simple prompts.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">The Real Shift: From Writing Code to Solving Problems</h2>

  <p class="mb-4">
    As AI tools become more capable, the role of a developer is evolving. Writing code line-by-line is becoming less of the core value.
  </p>

  <ul class="list-disc pl-6 mb-4 space-y-2">
    <li>Understanding problems deeply</li>
    <li>Designing scalable systems</li>
    <li>Making architectural decisions</li>
    <li>Interpreting and validating AI-generated outputs</li>
  </ul>

  <p class="mb-4">
    In other words, developers are moving up the abstraction ladder.
  </p>

  <h2 class="text-2xl font-bold mt-8 mb-4">Where AI Is Making the Biggest Impact</h2>

  <ul class="list-disc pl-6 mb-4 space-y-2">
    <li><strong>Development workflows:</strong> Code assistants, automated documentation, testing tools</li>
    <li><strong>Product features:</strong> Personalization, natural language interfaces</li>
    <li><strong>Operations:</strong> AI-driven monitoring and scaling</li>
    <li><strong>Data handling:</strong> Faster insights and forecasting</li>
  </ul>

  <h2 class="text-2xl font-bold mt-8 mb-4">How Developers Can Position Themselves</h2>

  <ol class="list-decimal pl-6 mb-4 space-y-2">
    <li><strong>Learn How AI Works:</strong> Understand APIs, models, and limitations</li>
    <li><strong>Embrace AI Tools:</strong> Use them to boost productivity</li>
    <li><strong>Strengthen Fundamentals:</strong> System design, debugging, performance</li>
    <li><strong>Build Projects:</strong> Apply AI in real-world apps</li>
    <li><strong>Focus on Problem-Solving:</strong> Combine tech with domain knowledge</li>
    <li><strong>Stay Adaptable:</strong> Keep learning as the space evolves</li>
  </ol>

  <h2 class="text-2xl font-bold mt-8 mb-4">The Future Belongs to Augmented Developers</h2>

  <p class="mb-4">
    The developers who thrive in the age of AI will be the ones who know how to use it effectively while maintaining strong technical judgment.
  </p>

  <p class="mb-4">
    AI is not the end of development—it is the next evolution of it.
  </p>

</div>
        </div>
         <Comments />
      </div>

      {/* RIGHT: AUTHOR */}
      <div className='lg:w-[30%] sticky top-8 h-max self-start px-4'>
        
        <h1 className='mb-4 text-sm font-medium'>Author</h1>

        <div className='flex items-center gap-3'>
          <Images 
            src="/blockforge-logo.png" 
            alt="blockforge" 
            className="rounded-full w-12 h-12 object-cover" 
            w="48" 
            h="48" 
          />
          <div>
            <Link to="/test" className='text-blue-400'>Lucky Pam</Link>
            <p className='text-sm text-gray-400'>A dedicated writer to the core</p>

             <div className='flex gap-4 mt-4'>
            <Link to="https://www.facebook.com/login/" target='blank'>
              <Images src="/facebook.png" alt="twitter" className="w-5 h-5 object-cover" w="20" h="20"/>
            </Link>
            <Link to="https://www.instagram.com/accounts/login/" target='blank'>
              <Images src="/instagram.jpeg" alt="linkedin" className="w-5 h-5 object-cover" w="20" h="20"/>
            </Link>
          </div>
          </div>
        </div>
        <PostMenuActions />
        <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
        <div className='flex flex-col text-sm gap-2'>
          <Link to="" className='underline'>All</Link>
          <Link to="" className='underline'>Web Design</Link>
          <Link to="" className='underline'> Development</Link>
          <Link to="" className='underline'>Database</Link>
          <Link to="" className='underline'>Search Engine</Link>
        </div>
        <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
        <Search />  
      </div>
    </div>
    
  )
}

export default SinglePost