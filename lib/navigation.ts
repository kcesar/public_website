/**
 * Single source of truth for site navigation.
 *
 * Previously each surface kept its own hand-maintained list: the navbar had an
 * inline `navlinks` array, the Join Us pages imported a flat `links` array, and
 * nested pages like Supplemental Mapwork appeared in neither. That made it easy
 * for a page to exist with no route into it. Everything now derives from the
 * tree below -- navbar, drawer, section nav, and breadcrumbs.
 */

/**
 * What kind of destination a link points at. This drives how it is rendered:
 * whether it uses client-side routing, whether it opens in a new tab, and what
 * gets announced to assistive tech.
 *
 * - `page`     an internal route -> next/link, client-side navigation
 * - `section`  an in-page anchor on an internal route -> plain anchor
 * - `external` another origin -> new tab, rel=noopener, announced as such
 * - `document` a downloadable asset (PDF) -> announced with its file type
 */
export type NavKind = "page" | "section" | "external" | "document";

export type NavNode = {
  title: string;
  href: string;
  kind: NavKind;
  /** Short blurb, used for link cards and menu descriptions. */
  description?: string;
  /** Nested destinations, in the order they should be presented. */
  children?: NavNode[];
};

/** Strips any `#fragment`, leaving the route a link ultimately lands on. */
export function pagePath(href: string): string {
  return href.split("#")[0];
}

export function isNewTab(node: NavNode): boolean {
  return node.kind === "external" || node.kind === "document";
}

/**
 * The Join Us section. Supplemental Mapwork lives under Training Materials
 * because that is what it is -- practice material for the mapwork taught in
 * basic training -- and the URL now reflects that.
 */
export const joinUsNav: NavNode = {
  title: "Join Us",
  href: "/join-us",
  kind: "page",
  description: "Membership requirements and how to apply.",
  children: [
    {
      title: "Basic Training Overview",
      href: "/join-us/basic-training-overview",
      kind: "page",
      description:
        "What the 170+ hour basic training program covers and expects.",
    },
    {
      title: "Training Materials",
      href: "/join-us/training-materials",
      kind: "page",
      description: "Packets, gear lists, and the training calendar.",
      children: [
        {
          title: "Supplemental Mapwork",
          href: "/join-us/training-materials/mapwork",
          kind: "page",
          description:
            "Review and practice mapwork problems similar to those used in training.",
        },
      ],
    },
  ],
};

export const siteNav: NavNode[] = [
  {
    title: "About Us",
    href: "/about",
    kind: "page",
    children: [{ title: "Our History", href: "/about/history", kind: "page" }],
  },
  joinUsNav,
  { title: "Contact Us", href: "/contact-us", kind: "page" },
  {
    title: "Members",
    href: "https://accounts.google.com/AccountChooser?continue=https%3A%2F%2Fsites.google.com%2Fkcesar.org%2Fmembers",
    kind: "external",
  },
];

/**
 * Every page-kind destination in a subtree, depth-first, including the root.
 * Used to build the Join Us section nav so a new nested page shows up there by
 * virtue of being in the tree rather than needing a second registration.
 */
export function flattenPages(node: NavNode): NavNode[] {
  const self = node.kind === "page" ? [node] : [];
  const kids = (node.children ?? []).flatMap(flattenPages);
  return [...self, ...kids];
}

/**
 * The ancestor chain from a root down to the node matching `pathname`, or an
 * empty array when the path is not in the tree. Drives breadcrumbs.
 */
export function findTrail(
  pathname: string,
  nodes: NavNode[] = siteNav,
): NavNode[] {
  const target = pagePath(pathname).replace(/\/+$/, "") || "/";

  for (const node of nodes) {
    if (node.kind !== "page") continue;
    if (pagePath(node.href) === target) return [node];

    const deeper = findTrail(target, node.children ?? []);
    if (deeper.length > 0) return [node, ...deeper];
  }
  return [];
}

/** True when `pathname` is the node's own page (ignoring any fragment). */
export function isCurrentPage(node: NavNode, pathname: string): boolean {
  if (node.kind !== "page") return false;
  const a = pagePath(node.href).replace(/\/+$/, "") || "/";
  const b = pagePath(pathname).replace(/\/+$/, "") || "/";
  return a === b;
}
