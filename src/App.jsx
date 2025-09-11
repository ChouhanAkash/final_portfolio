import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import GithubStats from './components/GithubStats'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App(){
return (
<div className="min-h-screen bg-white text-neutral">
<Navbar />
<main className="pt-20">
<Hero />
<TechStack />
<Projects />
<GithubStats />
<Contact />
</main>
<Footer />
</div>
)
}