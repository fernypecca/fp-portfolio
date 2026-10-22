import { tools } from "./tools";

export const toolSummary = {
  total: tools.length,
  live: tools.filter((tool) => !tool.status.concept && !tool.status.internal).length,
  concept: tools.filter((tool) => tool.status.concept).length,
  internal: tools.filter((tool) => tool.status.internal).length,
};

export const formatCount = (count) => String(count).padStart(2, "0");
