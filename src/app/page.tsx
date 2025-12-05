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
                className="text-2xl font-bold tracking-tighter base:text-5xl xl:text-5xl/none"
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
          <h2 className="text-2xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="mt-3 rounded-2xl border border-black/10 bg-white px-2 py-20 md:px-4 md:py-3 dark:border-white/10 dark:bg-black/40">
          <Markdown className="prose max-w-none font-sans text-[15px] leading-snug text-black prose-p:my-1 prose-headings:font-semibold prose-headings:mb-1 prose-headings:text-black prose-a:text-primary prose-a:no-underline hover:prose-a:underline text-pretty dark:text-white dark:prose-invert dark:prose-headings:text-white">
            {DATA.summary}
          </Markdown>
          </div>
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
            <h2 className="text-2xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill} className="text-[12px]">{skill}</Badge>
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
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 textbase font-bold">
                  My Projects
                </div>
                <h2 className="text-2xl font-bold tracking-tighter base:text-2xl">
                  Check out my latest work
                </h2>
               <p className="text-base text-muted-foreground">
                 I’ve worked on several projects that strengthened my development and problem-solving skills. Here are some of the highlights.{" "}
                 <Link href={DATA.contact.social.GitHub.url} className="text-blue-500 hover:underline">
                    here github
                  </Link>
               </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-full mx-auto">
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
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-base font-bold">
                  Open Source
                </div>
                <h2 className="text-2xl font-bold tracking-tighter base:text-2xl">
                  Check out my latest open source work
                </h2>
               <p className="text-base text-muted-foreground">
                 I’ve contributed to several open source projects that allowed me to collaborate with global developers, enhance real-world software, and give back to the community. Here are some of the highlights.{" "}
                 <Link href={DATA.contact.social.GitHub.url} className="text-blue-500 hover:underline">
                    here github
                  </Link>
               </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-full mx-auto">
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
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-base font-bold">
                  Freelance Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter base:text-2xl">
                  Check out my latest freelance work
                </h2>
                <p className="text-base text-muted-foreground">
                  I’ve completed various freelance projects that allowed me to collaborate with clients and deliver real-world solutions.{" "}
                  <Link href={DATA.contact.social.GitHub.url} className="text-blue-500 hover:underline">
                    here github
                  </Link>
                  
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-full mx-auto">
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
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-base font-bold">
                  Newsletter
                </div>
                <h2 className="text-2xl font-bold tracking-tighter base:text-2xl">
                  Check out my Newsletter
                </h2>
                <p className="text-base text-muted-foreground">
                My newsletter highlights my work and learning in Cloud technologies, DevOps practices, Kubernetes, open-source, and Cloud Native Insights..  <Link href="https://www.linkedin.com/newsletters/7400923199326064640/" className="text-blue-500 hover:underline">Explore Newsletter</Link>     
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
  <div className="max-w-full mx-auto rounded-xl border border-neutral-800 bg-black text-white shadow-md p-6">
    <ul className="mb-4 ml-4 divide-y divide-dashed border-l border-neutral-600">
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
  </div>
</BlurFade>



        </div>
      </section>
      
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-base font-bold">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter base:text-2xl">
                Get in Touch
              </h2>
              <p className="text-base text-muted-foreground">
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
      <section id="contact" className="border-t border-border">
        <div className="flex w-full flex-col items-center justify-center gap-4 px-4 py-6 text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-base font-bold">
                techwithabhay
              </div>
              <p className="text-base text-muted-foreground">
                © 2025 techwithabhay. All rights reserved.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
