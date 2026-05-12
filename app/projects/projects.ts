export type Project = {
  slug: string;
  title: string;
  blurb: string;
  longBlurb?: string;
  tags: string[];
  status?: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "mlb-fouls",
    title: "MLB Foul Ball Heatmap",
    blurb:
      "A probability heatmap that maps the likelihood of catching a foul ball or home run to specific stadium sections — built so a lifelong fan could finally bring a ball home.",
    longBlurb:
      "Inputs the home stadium, that night's lineups, and historical hit angles. Outputs a per-section probability of catching a foul or home run. Built for a friend who'd never caught one in years of trying.",
    tags: ["Python", "Statcast", "Modeling"],
    status: "Live",
    year: "2026",
  },
  {
    slug: "acrobat-sign",
    title: "Acrobat Sign — Customer Voice Brief",
    blurb:
      "Parsed customer feedback from across the web to synthesize themes, prioritize them, and draft a 30-60-90 day plan an inbound PM at Adobe could ship from.",
    longBlurb:
      "If I were starting tomorrow as a PM on the Acrobat Sign team, what would I do first? An interactive brief built from public feedback — clustering, ranking, and a 90-day plan.",
    tags: ["PM artifact", "VOC", "Strategy"],
    year: "2026",
  },
];
