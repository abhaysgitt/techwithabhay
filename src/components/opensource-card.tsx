import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  StarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { Section } from "./ui/section";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  topics: readonly string[] | string[];
  language?: string | null;
  owner?: {
    login: string;
    avatar_url: string;
  };
}

interface OpenSourceCardProps {
  repo: Repository;
}

export const OpenSourceCard: React.FC<OpenSourceCardProps> = ({ repo }) => {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="flex items-center justify-between text-base">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
            >
              {repo.name}
              <span className="size-1 rounded-full bg-green-500" />
            </a>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <span>{repo.stargazers_count}</span>
            </div>
          </CardTitle>

          <div className="hidden font-mono text-xs underline print:visible">
            {repo.html_url.replace("https://", "").replace("www.", "")}
          </div>

          <CardDescription className="line-clamp-2 font-mono text-xs">
            {repo.description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="mt-auto">
        <div className="mt-2 flex flex-wrap gap-1">
          {repo.topics.slice(0, 3).map((topic) => (
            <Badge
              key={topic}
              variant="secondary"
              className="px-1 py-0 text-[10px]"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface OpenSourceSectionProps {
  repositories: readonly Repository[] | Repository[];
}

export const OpenSourceSection: React.FC<OpenSourceSectionProps> = ({
  repositories,
}) => {
  const [showAll, setShowAll] = useState(false);

  const validRepos = repositories.filter(Boolean);

  // 👉 default: show only 2
  const visibleRepos = showAll ? validRepos : validRepos.slice(0, 2);
  const hasMoreRepos = validRepos.length > 2;

  return (
    <Section className="mb-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {visibleRepos.length > 0 ? (
          visibleRepos.map((repo) => (
            <OpenSourceCard key={repo.id} repo={repo} />
          ))
        ) : (
          <p className="col-span-2 text-sm text-muted-foreground">
            No repository data available. GitHub API rate limit may have been reached.
          </p>
        )}
      </div>

      {/* ✅ SHOW MORE / LESS BUTTON WITH ARROWS */}
      {hasMoreRepos && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            {showAll ? (
              <>
                Show less <ChevronUpIcon className="h-4 w-4" />
              </>
            ) : (
              <>
                Show more repositories <ChevronDownIcon className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      )}
    </Section>
  );
};
