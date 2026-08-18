"use client";


import { useEffect, useRef, useState } from "react";
import { Playfair_Display, Cormorant_Garamond, Poppins } from "next/font/google";
import styles from "./IsisKarinneLanding.module.css";
import { AnimateIn } from "@/components/AnimateIn";
import { InstagramEmbed } from "@/components/InstagramEmbed";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";
import Image from 'next/image';

// ---- Fonts (troque pelos imports em app/layout.tsx se preferir carregar globalmente) ----
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// ---- Dados do carrossel de resultados (troque pelos casos reais depois) ----
const results = [
  { id: 1, label: "Acompanhamento — Família 1" },
  { id: 2, label: "Acompanhamento — Família 2" },
  { id: 3, label: "Acompanhamento — Família 3" },
  { id: 4, label: "Acompanhamento — Família 4" },
  { id: 5, label: "Acompanhamento — Família 5" },
  { id: 6, label: "Acompanhamento — Família 6" },
  { id: 7, label: "Acompanhamento — Família 7" },
  { id: 8, label: "Acompanhamento — Família 8" },
];


export default function IsisKarinneLanding() {

  return (
    <div className={`${styles.page} ${playfair.variable} ${cormorant.variable} ${poppins.variable}`}>

      {/* ============ HERO ============ */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <AnimateIn direction="up" delay={0.6}>
            <div className={`${styles.heroName} ${styles.script}`} style={{ fontFamily: "var(--font-cormorant)" }}>
              Isis Karinne
            </div>
            <h1 className={styles.heroTitle}>
             Acompanhamento nutricional completo para <b><em>gestação</em></b>, <b><em>pós-parto</em></b> e <b><em>introdução alimentar</em></b>.
            </h1>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6}>
            <p className={styles.heroDesc}>
              Cada fase da maternidade merece um cuidado especial. 
              Tenha um acompanhamento nutricional personalizado para viver a gestação,
              o pós-parto e a introdução alimentar com mais segurança, leveza e tranquilidade.

            </p>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6}>
            <div className={styles.heroCta}>
              <a href="https://api.whatsapp.com/message/SEU_LINK_AQUI?autoload=1&app_absent=0&utm_source=ig" className={styles.btn}>
                Agendar minha consulta
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            </AnimateIn>
          </div>

          
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.benefitsTitle}>
            <AnimateIn direction="fade" delay={0.6}>
            <h2 className={styles.eyebrow}>
              Cuide da Alimentação da Sua Família com
              Quem Entende de Cada Fase
            </h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6}>
            <p className={styles.lede}>
              Quer tentar engravidar, está grávida ou já é mãe? Com um
              acompanhamento nutricional especializado, você atravessa cada fase
              com mais segurança, tranquilidade e informação de verdade.
            </p>
            </AnimateIn>
          </div>
          
          <div className={styles.cardRow}>
            <AnimateIn direction="fade" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className={`${styles.card} ${styles.cardbg1}`}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3>Introdução Alimentar Segura</h3>
              <p>
                Do primeiro papinha aos primeiros pedaços, você recebe
                um passo a passo claro para introduzir novos alimentos com
                segurança e confiança, no ritmo do seu bebê.
              </p>
            </div>
            </AnimateIn>
            <AnimateIn direction="fade" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className={`${styles.card} ${styles.cardbg2}`}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16M6 6l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12M9 10v6M15 10v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3>Manejo da Seletividade Alimentar</h3>
              <p>
                Estratégias práticas para lidar com a recusa alimentar e a
                seletividade, ampliando o paladar da criança sem transformar
                a hora da refeição em batalha.
              </p>
            </div>
            </AnimateIn>
            <AnimateIn direction="fade" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className={`${styles.card} ${styles.cardbg3}`}>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </div>
              <h3>Suporte em Cada Fase</h3>
              <p>
                Acompanhamento nutricional para tentantes, gestantes e mães
                no pós-parto, cuidando de você e do seu bebê em cada etapa
                dessa jornada.
              </p>
            </div>
            </AnimateIn>
          </div>
          
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className={styles.about}>
        <div className={`${styles.container} ${styles.aboutGrid}`}>
          <div>
            <AnimateIn direction="right" delay={0.6}>
            <h2 className={styles.eyebrow}>Sobre mim</h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6}>
            <p>
              Sou nutricionista graduada com especialização em{" "}
              <strong>Nutrição Materno-Infantil</strong>, e dedico meu trabalho a
              acompanhar mães e famílias desde o desejo de engravidar até os
              primeiros anos de vida do bebê. Cada orientação que eu passo é
              construída a partir da sua história, da sua rotina e das
              necessidades específicas da sua fase.
            </p>
            <p>
              Atendo tanto quem está tentando engravidar e precisa preparar o
              corpo para essa fase, quanto gestantes que buscam uma gravidez mais
              tranquila e mães que estão vivendo a introdução alimentar ou a
              seletividade dos filhos, com atendimento em Fortaleza-CE e
              Mossoró-RN.
            </p>
            </AnimateIn>

            <div className={styles.aboutCreds}>
              <AnimateIn direction="up" delay={0.5}>
              <div className={styles.cred}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4-8 4-8-4 8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" stroke="currentColor" strokeWidth="1.5" /></svg>
                </div>
                <div className={styles.textForm}>
                  <p>Pós em Nutrição Materno-Infantil</p>
                  <span>Formação específica em gestação, pós-parto e introdução alimentar.</span>
                </div>
              </div>
              </AnimateIn>
              <AnimateIn direction="up" delay={0.6}>
              <div className={styles.cred}>
                <div className={styles.iconCircle}>
                  <svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" /><path d="M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <div className={styles.textForm}>
                  <p>Registro ativo CRN</p>
                  <span>Atuação clínica regulamentada e responsável.</span>
                </div>
              </div>
              </AnimateIn>
            </div>
          </div>

          {/* Troque por <Image src="/isis-karinne/about.jpg" alt="Isis Karinne" fill /> dentro de um wrapper com position:relative */}
          <AnimateIn direction="left" delay={0.5}>
          <div className={styles.aboutPhoto}>
            
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* ============ PARA QUEM ============ */}
      <section className={styles.audience}>
        <div className={styles.container}>
          <div className={styles.audienceTitle}>
            <AnimateIn direction="fade" delay={0.6}>
            <h2 className={styles.eyebrow}>
              Para quem é o Acompanhamento?
            </h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6}>
            <p className={styles.lede}>
              Seja para se preparar para engravidar, viver uma gestação mais
              tranquila, se recuperar no pós-parto ou cuidar da alimentação do seu
              filho, o acompanhamento é totalmente adaptado às suas necessidades.
            </p>
            </AnimateIn>
          </div>
          <div className={styles.audienceGrid}>
            <AnimateIn direction="fade" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className= {`${styles.audienceItem} ${styles.audienceItem1}`}>
              <h3>Tentantes</h3>
              <p>Preparação nutricional do corpo para a gravidez.</p>
            </div>
            </AnimateIn>
            <AnimateIn direction="fade" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className= {`${styles.audienceItem} ${styles.audienceItem2}`}>
              <h3>Gestantes</h3>
              <p>Nutrição equilibrada para uma gestação saudável.</p>
            </div>
            </AnimateIn>
            <AnimateIn direction="fade" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className= {`${styles.audienceItem} ${styles.audienceItem3} ${styles.noBorderRight}`}>
              <h3>Pós-parto</h3>
              <p>Recuperação e suporte nutricional para a nova rotina com o bebê.</p>
            </div>
            </AnimateIn>
            <AnimateIn direction="fade" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className= {`${styles.audienceItem} ${styles.audienceItem4} ${styles.noBorderRight}`}>
              <h3>Introdução Alimentar e Seletividade</h3>
              <p>Orientação prática para a primeira comida e para crianças seletivas.</p>
            </div>
            </AnimateIn> 
          </div>
        </div>
      </section>
      {/*
      <section className={styles.results}>
        <div className={styles.container}>
          <div className={styles.iframe}>
            <InstagramEmbed url="https://www.instagram.com/reel/DbUB1-_PbQv/" />
          </div>
        </div>
      </section>
      */}
      {/* ============ RESULTS CAROUSEL ============
      
        
          <AnimateIn direction="fade" delay={0.6}>
          <h2 className={styles.eyebrow}>Histórias Reais</h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.6}>
          <p className={styles.lede}>As histórias que você vê aqui são consequência de um acompanhamento próximo, feito com escuta, planejamento e carinho em cada fase. Cada família representa uma jornada de mais segurança e tranquilidade na hora de alimentar quem elas amam</p>
          </AnimateIn>
          <AnimateIn direction="fade" delay={0.7}>
          <Carousel className="w-full max-w-5xl mx-auto mt-10">
            <CarouselContent>
              {results.map((result) => (
                <CarouselItem
                  key={result.id}
                  className="basis-full sm:basis-1/2 md:basis-1/3"
                >
                  <div className="relative aspect-[9/16] rounded-xl overflow-hidden border">
                    {}
                    <Image
                      src={`/imagens/results/image${result.id}.jpg`}
                      alt={result.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
            <CarouselDots className="hidden max-[1025px]:flex"/>
          </Carousel>
          </AnimateIn>
          
        </div>

      
      </section>
         */}



      {/* ============ O QUE MUDA ============ */}
      <section className={styles.changes}>
        <div className={styles.container}>
          <AnimateIn direction="fade" delay={0.6}>
          <h2 className={styles.eyebrow}>
            O que muda no seu Acompanhamento?
          </h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={0.6}>
          <p className={styles.lede}>
            Detalhes que fazem diferença entre uma orientação genérica e um
            acompanhamento que realmente cuida de você e do seu bebê.
          </p>
          </AnimateIn>
          <div className={styles.changesRow}>
            <AnimateIn direction="fade" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className={styles.changeItem}>
              <div className={styles.changeNum} style={{ fontFamily: "var(--font-merriweather)" }}>1</div>
              <h3>Plano 100% individual</h3>
              <p>Nada de orientação genérica de internet. Cada plano é montado a partir da sua fase, seus exames e a rotina da sua família.</p>
            </div>
            </AnimateIn>
            <AnimateIn direction="fade" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className={styles.changeItem}>
              <div className={styles.changeNum} style={{ fontFamily: "var(--font-merriweather)" }}>2</div>
              <h3>Foco na realidade da rotina</h3>
              <p>Orientações realistas para quem tem pouco tempo, noites mal dormidas e uma casa cheia — sem cobranças que não cabem no seu dia a dia.</p>
            </div>
            </AnimateIn>
            <AnimateIn direction="fade" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className={styles.changeItem}>
              <div className={styles.changeNum} style={{ fontFamily: "var(--font-merriweather)" }}>3</div>
              <h3>Suplementação orientada</h3>
              <p>Indicação de suplementos apenas quando fazem sentido clínico, com base em evidência científica atual para cada fase.</p>
            </div>
            </AnimateIn>
            <AnimateIn direction="fade" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className={styles.changeItem}>
              <div className={styles.changeNum} style={{ fontFamily: "var(--font-merriweather)" }}>4</div>
              <h3>Suporte entre consultas</h3>
              <p>Canal direto para dúvidas do dia a dia, para você nunca ficar perdida entre uma consulta e outra.</p>
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      
      <section className={styles.finalCta} id="cta">
        <div className={`${styles.container} ${styles.finalGrid}`}>
          
          <div className={styles.finalCopy}>
            <AnimateIn direction="up" delay={0.5}>
            <h1 className={styles.heroTitle}>
              A próxima fase da sua família começa com um plano feito para <b><em>vocês</em></b>.
            </h1>
            <p>
              Agende sua avaliação inicial e receba um acompanhamento nutricional
              construído a partir da sua fase, sua rotina e as necessidades do seu
              bebê.
            </p>
            </AnimateIn>
            <AnimateIn direction="blur" delay={0.8}>
            <div className={styles.finalCtaBtn}>
              <a href="https://api.whatsapp.com/message/SEU_LINK_AQUI?autoload=1&app_absent=0&utm_source=ig" className={styles.btn}>
                Agendar minha consulta
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            </AnimateIn>
          </div>

          {/* Troque por <Image src="/isis-karinne/cta.jpg" alt="Isis Karinne" fill /> dentro de um wrapper com position:relative */}
          
        </div>
      </section>

      <footer className={styles.footer}>
        © 2026 Isis Karinne — Todos os direitos reservados.
        <br />
        Site feito por <b>Jackson Reis</b>.
      </footer>
    </div>
  );
}