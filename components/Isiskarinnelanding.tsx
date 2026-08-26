"use client";


import { useEffect, useRef, useState } from "react";
import { Playfair_Display, Cormorant_Garamond, Poppins } from "next/font/google";
import styles from "./IsisKarinneLanding.module.css";
import { AnimateIn } from "@/components/AnimateIn";
import InstagramReelEmbed from '@/components/InstagramReelEmbed';
import VideoCarousel from "@/components/VideoCarousel/VideoCarousel";


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

 useEffect(() => {
  const videos = document.querySelectorAll(
    "#videoPc, #videoBlur, #videoMobile"
  ) as NodeListOf<HTMLVideoElement>;

  const observers: IntersectionObserver[] = [];

  videos.forEach((video) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(video);
    observers.push(observer);
  });

  return () => {
    observers.forEach((observer) => observer.disconnect());
  };
}, []);

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
            <AnimateIn direction="up" delay={0.5}>
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
            <AnimateIn direction="up" delay={0.5}>
            <h2 className={styles.eyebrow}>Sobre mim</h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6}>
            <p>
              Sou nutricionista com especialização em{" "}
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
              seletividade dos filhos que possuem TEA, TDAH e Síndrome de Down. Com atendimento presencial em Fortaleza-CE e
              online para todo o Brasil.
            </p>
            </AnimateIn>

            <div className={styles.aboutCreds}>
              {/*
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
              */}
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
      

      <section className={styles.results}>
        <div className={styles.container}>
          
          <div className={styles.containerVideo}>         
            
            <video
            className={styles.videoPc}
            id="videoPc"
              controls
              playsInline
              preload="metadata"
              style={{ width: "100%", height: "auto" }}>
              <source src="https://res.cloudinary.com/igdhxud9/video/upload/v1787703366/video-iris2.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
          <video
            className={styles.videoMobile}
            id="videoMobile"
            controls
            playsInline
            controlsList="nofullscreen noremoteplayback"
            disablePictureInPicture
            poster="/imagens/video-capa.jpg"
            preload="metadata">
            <source src="https://res.cloudinary.com/igdhxud9/video/upload/v1787703378/video-iris.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      {/* ============ Video ============ 
      <section className={styles.results}>
        <div className={styles.container}>
          <div className={styles.iframe}>
            <InstagramReelEmbed />
          </div>
        </div>
      </section>*/}


      {/* ============ PARA QUEM ============ */}
      <section className={styles.audience}>
        <div className={styles.container}>
          <div className={styles.audienceTitle}>
            <AnimateIn direction="up" delay={0.6}>
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
              <div className={styles.iconAcomp}>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="var(--ci-primary-color, #c9793a)" d="M224,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,224,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,224,48Z"></path> <path fill="var(--ci-primary-color, #c9793a)" d="M353.959,251.37c-15.021-16.9-35.063-27.659-62.61-33.506L266.551,160H178.123L152,342.863V400h56v96h96V400h80V352C384,307.028,374.174,274.112,353.959,251.37ZM352,368H272v96H240V368H184V345.137L205.877,192h39.572l23.291,54.344,8.629,1.438c24.5,4.083,41.233,11.979,52.672,24.848C344.817,289.253,352,315.215,352,352Z"></path> </g></svg>
              </div>
              <h3>Gestantes</h3>
              <p>Nutrição equilibrada para uma gestação saudável.</p>
            </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className= {`${styles.audienceItem} ${styles.audienceItem2}`}>
              <div className={styles.iconAcomp}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                </svg>
              </div>
              <h3>Tea, Tdah, Down</h3>
              <p>Preparação nutricional para seu filho.</p>
            </div>
            </AnimateIn>
            
            <AnimateIn direction="up" delay={0.6} once={false} className={styles.cardWrapper}>
            <div className= {`${styles.audienceItem} ${styles.audienceItem4} ${styles.noBorderRight}`}>
               <div className={styles.iconAcomp}>
                <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"  fill="#c9793a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M288.209,331.768c-13.486,0-25.843-2.991-37.793-5.891c-11.956-2.888-24.313-5.885-37.688-5.885 c-10.64,0-20.838,1.883-31.166,5.753l-4.05,1.509V445.54c0,3.696,1.032,7.11,3.08,10.156c1.974,2.907,4.811,5.254,8.003,6.604 c2.257,0.948,4.57,1.419,7.068,1.419h120.653c3.704-0.007,7.117-1.046,10.15-3.088c2.914-1.959,5.254-4.805,6.611-8.017 c0.941-2.222,1.412-4.597,1.412-7.054V320.324l-8.619,3.565C313.02,329.186,300.697,331.768,288.209,331.768z"></path> <path d="M381.115,200.834c0.028-4.888-0.215-21.71-4.458-32.759c-5.303-13.777-19.322-35.134-34.892-47.581 c-5.096-4.085-10.911-8.19-17.065-12.538c-7.304-5.157-19.98-14.116-25.255-19.716c0.146-0.235,0.298-0.471,0.443-0.686 c4.05-6.265,10.841-16.739,10.841-32.815C310.729,24.563,286.18,0,256.003,0c-30.184,0-54.732,24.563-54.732,54.74 c0,16.068,6.791,26.55,10.841,32.815c0.145,0.215,0.298,0.45,0.45,0.686c-5.282,5.593-17.958,14.559-25.262,19.716 c-6.148,4.348-11.97,8.453-17.072,12.538c-15.563,12.454-29.588,33.811-34.885,47.581c-4.236,11.049-4.479,27.871-4.458,32.759 l0.07,11.603h-0.07v235.719c0,8.626,1.696,16.982,5.061,24.86c4.866,11.402,12.924,21.122,23.295,28.08 c10.62,7.13,23.047,10.904,35.93,10.904h121.636c8.674,0,17.1-1.689,25.02-5.026c11.506-4.833,21.295-12.822,28.294-23.123 c7.2-10.55,11-22.894,10.994-35.694V212.437h-0.07L381.115,200.834z M155.731,175.905c4.209-10.952,16.151-28.772,28.135-38.367 c17.051-13.632,48.163-31.305,51.389-45.269c3.136-13.61-12.15-18.45-12.15-37.529c0-18.18,14.726-32.904,32.898-32.904 c18.166,0,32.898,14.725,32.898,32.904c0,19.08-15.293,23.919-12.157,37.529c3.226,13.964,34.338,31.638,51.389,45.269 c11.984,9.595,23.926,27.415,28.135,38.367c3.109,8.072,3.012,24.812,3.012,24.812H152.72 C152.72,200.717,152.623,183.977,155.731,175.905z M359.653,233.732v16.373v198.051c0,5.753-1.128,11.319-3.364,16.553 c-3.233,7.615-8.612,14.094-15.542,18.74c-7.089,4.742-15.376,7.248-23.954,7.255H195.206c-5.788,0-11.402-1.128-16.671-3.343 c-7.67-3.213-14.199-8.543-18.879-15.424c-4.784-7.034-7.304-15.259-7.31-23.78V250.105v-16.373v-11.18h0.374h206.56h0.374V233.732 z"></path> </g> </g>
                </svg>
              </div>
              <h3>Introdução Alimentar e Seletividade</h3>
              <p>Orientação prática para a primeira comida e para crianças seletivas.</p>
            </div>
            </AnimateIn> 
          </div>
        </div>
      </section>

      <VideoCarousel />
      
      
      
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
          <AnimateIn direction="up" delay={0.6}>
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

      {/* ============ FAQ ============ */}
<section className={styles.Faq} id="faq">
  <div className={styles.container}>

    <div className={styles.faqHeader}>
      <AnimateIn direction="up" delay={0.6}>
      <h2 className={styles.eyebrow}>
        Perguntas Frequentes
      </h2>
      </AnimateIn>
    </div>

    <div className={styles.faqList}>
      <AnimateIn direction="fade" delay={0.6}>
      <details className={styles.cardFaq} open>
        <summary>
          <div className={styles.faqh1}>
            1. Preciso seguir uma dieta muito restritiva?
          </div>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c9793a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#c9793a" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </summary>
        <p>
          Não. O acompanhamento é pensado para criar uma alimentação
          equilibrada e possível de manter, respeitando sua rotina,
          preferências e necessidades.
        </p>   
      </details>
      </AnimateIn>

      <AnimateIn direction="fade" delay={0.6}>
      <details className={styles.cardFaq}>
        <summary>
          <div className={styles.faqh1}>
          2. O acompanhamento também é para gestantes?
          </div>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c9793a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#c9793a" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </summary>
        <p>
          O acompanhamento é individual e acompanha cada fase da gestação,
          com ajustes na alimentação conforme os sintomas, exames, rotina
          e necessidades da mãe e do bebê.
        </p>
      </details>
      </AnimateIn>
      
      <AnimateIn direction="fade" delay={0.6}>
      <details className={styles.cardFaq}>
        <summary>
          <div className={styles.faqh1}>
          3. O acompanhamento também é para crianças?
          </div>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c9793a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#c9793a" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </summary>  
        <p>
          Sim. O acompanhamento também pode auxiliar na introdução alimentar,
          seletividade alimentar e construção de uma relação mais saudável
          da criança com os alimentos.
        </p>
      </details>
      </AnimateIn>

      <AnimateIn direction="fade" delay={0.6}>
      <details className={styles.cardFaq}>
        <summary>
          <div className={styles.faqh1}>
          4. Atende mães no pós-parto?
          </div>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c9793a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#c9793a" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </summary>
        <p>
          Sim. O acompanhamento considera as mudanças dessa fase, ajudando
          a cuidar da alimentação da mãe e oferecendo suporte nutricional
          para essa nova rotina.
        </p>
      </details>
      </AnimateIn>

      <AnimateIn direction="fade" delay={0.6}>
      <details className={styles.cardFaq}>
        <summary>
          <div className={styles.faqh1}>
          5. O atendimento pode ser feito online?
          </div>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c9793a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#c9793a" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </summary>
        <p>
          Sim. O atendimento é realizado presencialmente em Fortaleza-CE
          e também de forma online para todo o Brasil.
        </p>
      </details>
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
            <AnimateIn direction="up" delay={0.8}>
            <div className={styles.finalCtaBtn}>
              <a href="https://api.whatsapp.com/message/SEU_LINK_AQUI?autoload=1&app_absent=0&utm_source=ig" 
              className={styles.btn}>
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