/**
 * Extra artiklar (vågor 2–6 i docs/PLAN-sidor-2026-10.md), en fil per grupp.
 * Läggs efter basartiklarna i config/blog.ts.
 */
import type { Post } from "@/config/blog";
import { dimensioner } from "./dimensioner";
import { armeringTill1 } from "./armering-till-1";
import { armeringTill2 } from "./armering-till-2";
import { guider1 } from "./guider-1";
import { guider2 } from "./guider-2";

export const extraPosts: Post[] = [...dimensioner, ...armeringTill1, ...armeringTill2, ...guider1, ...guider2];
