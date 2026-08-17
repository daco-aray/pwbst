export type HomeItem = {
  label: string;
  href?: string;
  linkLabel?: string;
  external?: boolean;
  prefix?: string;
};

export type HomeSection = {
  title: string;
  items?: HomeItem[];
  volumes?: {
    include?: number[];
    exclude?: number[];
    sort?: "asc" | "desc";
    showEmpty?: boolean;
  };
};

export type SiteConfig = {
  name: string;
  description: string;
  homeAsciiArt: string;
  homeSections: HomeSection[];
};

export const siteConfig: SiteConfig = {
  name: "David C CV",
  description: "Full Stack Software Developer and Game Developer",
  homeAsciiArt: `████   ███  █   █ ███ ████      ███   ███  ████  ████  █████ ████   ███    
█░░░█ █ ░░█ █░  █░ █░░█░░░█    █ ░░░ █ ░░█ █░░░█ █░░░█ █░░░░░█░░░█ █ ░░█   
█░░░█░█████░█░░ █░░█░░█░░░█░   █░ ░░░█░ ░█░████░░█░░░█░████░░████░░█░ ░█░  
█░░ █░█░░░█░░█░█ ░░█░░█░░ █░░  █░░   █░░ █░█░░█░ █░░ █░█░░░░ █░░█░ █░░ █░░ 
████ ░█░░░█░░ █ ░ ███░████ ░░   ███   ███ ░█░░░█░████ ░█████░█░░░█░ ███ ░░ 
 ░░░░ ░░░  ░░  ░ ░ ░░░ ░░░░ ░    ░░░   ░░░ ░░░  ░ ░░░░ ░░░░░░ ░░  ░  ░░░ ░ 
  ░░░░  ░   ░   ░   ░░░ ░░░░      ░░░   ░░░  ░   ░ ░░░░  ░░░░░ ░   ░  ░░░  `,
  homeSections: [
    {
      title: "Full Stack Software Developer and Game Developer"
    },
    {
      title: "Job History",
      volumes: {
        sort: "asc",
        showEmpty: false
      }
    },
    {
      title: "Skills",
      items: [
        { label: "React.js, Express.js, Next.js, Vue and .NET" },
        {
          label:
            "Azure Functions, API Management, Cosmos DB, Logic Apps, Lambda, API Gateway, DynamoDB, Terraform, Docker, Jenkins, Azure Devops, ARM Templates, Kubernetes and Github Actions"
        },
        { label: "PostgresQL, MySQL, Microsoft SQL Server" },
        { label: "Devin AI, Copilot, Claude and Codex" }
      ]
    },
    {
      title: "Contact",
      items: [
        { label: "email: daco.aray@gmail.com" },
        { label: "phone: +506-8393-3070" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/david-cordero-258770112/",
          external: true
        },
        {
          label: "GitHub",
          href: "https://github.com/daco-aray",
          external: true
        }
      ]
    }
  ]
};
