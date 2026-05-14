"use client";

import Image from "next/image";
import Link from "next/link";
import imageMeta from "@/lib/image-meta.json";

type Meta = Record<string, { blurDataURL?: string }>;
const meta = imageMeta as Meta;

export interface Module {
  number: string;
  title: string;
  argument: string;
  widgets: number;
  artifact: string;
  quiz: string;
  href: string;
  image: string;
}

interface Props {
  module: Module;
  index?: number;
}

export default function ModuleStoryCard({ module: m }: Props) {
  const blur = meta[m.image]?.blurDataURL;

  return (
    <article className="relative shrink-0 w-[88vw] sm:w-[70vw] lg:w-[58vw] xl:w-[52vw] aspect-[16/11] rounded-2xl overflow-hidden bg-forest-900 border border-forest-700/60 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
      <Image
        src={m.image}
        alt={`${m.title} module`}
        fill
        sizes="(max-width: 768px) 88vw, 60vw"
        loading="lazy"
        placeholder={blur ? "blur" : undefined}
        blurDataURL={blur}
        className="object-cover"
      />
      {/* Heavy scrim — carousel-week*.png assets have baked-in AI text; we
          obscure it and keep the image as moody texture only. */}
      <div className="absolute inset-0 bg-forest-950/80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-forest-950/85 via-forest-950/55 to-forest-950/35" />

      <div className="relative h-full flex flex-col justify-between p-8 sm:p-12">
        <div>
          <p className="text-cyan text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            {m.number}
          </p>
          <h3
            className="font-serif text-cream font-semibold leading-[1.05] mb-5"
            style={{ fontSize: "clamp(2rem, 3vw + 0.5rem, 3.25rem)" }}
          >
            {m.title}
          </h3>
          <p className="text-cream/80 max-w-md leading-relaxed text-base sm:text-lg">
            {m.argument}
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <dl className="grid grid-cols-3 gap-x-8 gap-y-1 text-cream/85">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/55 mb-1">
                Widgets
              </dt>
              <dd className="font-serif text-2xl text-cyan">{m.widgets}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/55 mb-1">
                Artifact
              </dt>
              <dd className="font-serif text-base leading-tight">{m.artifact}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/55 mb-1">
                Quiz
              </dt>
              <dd className="font-serif text-2xl text-cyan">{m.quiz}</dd>
            </div>
          </dl>
          <Link
            href={m.href}
            className="text-sm text-cream/80 hover:text-cyan transition-colors inline-flex items-center gap-2 border-b border-cream/30 hover:border-cyan pb-1"
          >
            Module detail
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
