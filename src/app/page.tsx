import Calcom from "@/components/calcom";
import { FreelanceCard } from "@/components/freelance-card";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { OpenSourceCard } from "@/components/open-source-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex flex-col flex-1 space-y-1.5 items-center justify-center text-center">
              
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
                yOffset={8}
                text={`${DATA.name}`}
              />
            
              <BlurFadeText
                className="max-w-[600px] md:text-lg"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>

          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <p className="text-sm text-muted-foreground">
                 I’m a passionate Computer Science undergrad Focused on building scalable {" "}
                 <Link href="#projects" className="text-blue-500 hover:underline">
                    AI-driven products {" "}
                  </Link>
                  & Deeply passionate about learning new technologies and continually enhancing my skills. looking for opportunities to collaborate with other professionals and organizations that share my vision and nurture my passion for programming and values of creating impactful and user-centric products.{" "}
               </p>
        </BlurFade>
      </section>
     {/* <section id="podcast">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Podcast I got featured on
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                My Coding Journey
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Click the link below to listen to my podcast episode{" "}
              </p>
              <div className="mx-auto aspect-video">
                <iframe
                  className="w-[90vw] sm:w-[85vw] md:w-[75vw] lg:w-[70vw] xl:w-[70vw] h-full rounded-[20px]"
                  src="https://www.youtube.com/embed/5mhevdwXuJM?si=-Nww4qpdNBhi1aqz"
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </BlurFade>
        </div>
      </section> */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-bold">
                  My Projects
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl">
                  Check out my latest work
                </h2>
               <p className="text-sm text-muted-foreground">
                 I’ve worked on several projects that strengthened my development and problem-solving skills. Here are some of the highlights.{" "}
                 <Link href={DATA.contact.social.GitHub.url} className="text-blue-500 hover:underline">
                    here github
                  </Link>
               </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="opensource">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-bold">
                  Open Source
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl">
                  Check out my latest open source work
                </h2>
               <p className="text-sm text-muted-foreground">
                 I’ve contributed to several open source projects that allowed me to collaborate with global developers, enhance real-world software, and give back to the community. Here are some of the highlights.{" "}
                 <Link href={DATA.contact.social.GitHub.url} className="text-blue-500 hover:underline">
                    here github
                  </Link>
               </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.opensource.map((opensource, id) => (
              <BlurFade
                key={opensource.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <OpenSourceCard
                  href={opensource.href}
                  key={opensource.title}
                  title={opensource.title}
                  description={opensource.description}
                  dates={opensource.dates}
                  tags={opensource.technologies}
                  image={opensource.image}
                  video={opensource.video}
                  links={opensource.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="freelance">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-bold">
                  Freelance Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">
                  Check out my latest freelance work
                </h2>
                <p className="text-sm text-muted-foreground">
                  I’ve completed various freelance projects that allowed me to collaborate with clients and deliver real-world solutions. <Link href="#freelance" className="text-blue-500 hover:underline">here</Link> are some of the highlights.{" "}
                  
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.freelance.map((freelance, id) => (
              <BlurFade
                key={freelance.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <FreelanceCard
                  href={freelance.href}
                  key={freelance.title}
                  title={freelance.title}
                  description={freelance.description}
                  dates={freelance.dates}
                  tags={freelance.technologies}
                  image={freelance.image}
                  video={freelance.video}
                  links={freelance.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-bold">
                  Hackathons
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl">
                  I like building things
                </h2>
                <p className="text-sm text-muted-foreground">
                  I’ve taken part in several hackathons that challenged my problem-solving and collaboration skills.  <Link href="#hackathons" className="text-blue-500 hover:underline">here</Link> are some of the highlights.{" "}
                 
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-bold">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-2xl">
                Get in Touch
              </h2>
              <p className="text-sm text-muted-foreground">
                I’m always open to connecting, collaborating, or discussing new opportunities. Feel free to reach out on <Link href={DATA.contact.social.X.url} className="text-blue-500 hover:underline">twitter</Link> and let’s create something amazing together.{" "}
                
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="cal">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <Calcom />
        </BlurFade>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-1 w-full py-1">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-bold">
                techwithabhay
              </div>
              <p className="text-sm text-muted-foreground">
                © 2025 techwithabhay. All rights reserved.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
