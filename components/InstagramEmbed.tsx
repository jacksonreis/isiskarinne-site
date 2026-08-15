"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

type InstagramEmbedProps = {
  url: string; // ex: "https://www.instagram.com/reel/DbUB1-_PbQv/"
  caption?: string; // texto do link de rodapé, opcional
};

export function InstagramEmbed({ url, caption = "Ver essa foto no Instagram" }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Reprocessa o embed sempre que o componente montar
  // (necessário em navegação client-side do Next.js, onde o script
  // pode já ter sido carregado antes deste blockquote existir no DOM)
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div ref={containerRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: 1,
          maxWidth: 540,
          minWidth: 326,
          padding: 0,
          width: "calc(100% - 2px)",
        }}
      >
        <div style={{ padding: 16 }}>
          <a
            href={`${url}?utm_source=ig_embed&utm_campaign=loading`}
            style={{
              background: "#FFFFFF",
              lineHeight: 0,
              padding: 0,
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
              display: "block",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {caption}
          </a>
        </div>
      </blockquote>

      {/* Carrega o script oficial do Instagram e chama o process() quando terminar */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.instgrm?.Embeds.process();
        }}
      />
    </div>
  );
}