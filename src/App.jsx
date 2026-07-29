import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Analytics } from '@vercel/analytics/react'
import Faq from './components/Faq.jsx'
import TestimonialCarousel from './components/TestimonialCarousel.jsx'

const whatsappMessage =
  'Olá! Gostaria de solicitar um orçamento para meu evento.'

const eventTypes = [
  { label: 'Casamentos', subject: 'um casamento' },
  { label: 'Formaturas', subject: 'uma formatura' },
  { label: '15 anos', subject: 'uma festa de 15 anos' },
  { label: 'Batizados', subject: 'um batizado' },
  { label: 'Confraternizações', subject: 'uma confraternização' },
]

const testimonials = [
  {
    event: 'Festa de formatura',
    quote:
      'O atendimento de vocês foi muito bom, nos recepcionaram com maestria e simpatia, como sempre! A comida estava maravilhosa e o atendimento também.',
    name: 'Gabriel Brião',
  },
  {
    event: 'Festa de 15 anos',
    quote:
      'Fizeram todo o possível para que tudo saísse impecável e com excelência no grande dia. Todos os convidados ficaram muito satisfeitos com o atendimento e o sabor dos pratos servidos.',
    name: 'Silvane Beatriz Davila',
  },
  {
    event: 'Formatura e batizado',
    quote:
      'Comida simples e com o sabor de casa, onde cada detalhe é pensado com carinho. Atendimento flexível e personalizado. Nota 10!',
    name: 'Edson Oliveira',
  },
  {
    event: 'Festa de formatura',
    quote:
      'O atendimento foi impecável, tanto a apresentação quanto o sabor dos alimentos do buffet estavam incríveis. Recomendo muito!',
    name: 'Alana Rafaela da Rosa',
  },
  {
    event: 'Primeira comunhão',
    quote:
      'O buffet estava excelente, saboroso e no ponto! Equipe atenciosa, prestativa e rápida na reposição dos alimentos. Super recomendo!',
    name: 'Adriana Simone Schwengber',
  },
  {
    event: 'Festa de casamento',
    quote:
      'Uma família maravilhosa que nos serviu da melhor maneira possível. No dia mais importante de nossas vidas fomos abençoados com uma sede espetacular e comida de outro patamar.',
    name: 'Carlos Leonardo Klinger',
  },
  {
    event: 'Festa de 15 anos',
    quote:
      'Até hoje recebemos elogios quanto ao buffet escolhido! Estava maravilhoso em todos os aspectos: apresentação, quantidade e, principalmente, sabor.',
    name: 'Maribel Schwantz',
  },
]

const gallery = [
  {
    src: '/images/buffet-saladas.webp',
    alt: 'Mesa de buffet com saladas, legumes e frutas',
    width: 810,
    height: 974,
    className: 'gallery-featured',
  },
  {
    src: '/images/buffet-acompanhamentos.webp',
    alt: 'Acompanhamentos assados servidos no buffet',
    width: 797,
    height: 966,
  },
  {
    src: '/images/buffet-prato-quente.webp',
    alt: 'Prato quente gratinado e acompanhamentos',
    width: 798,
    height: 980,
  },
  {
    src: '/images/buffet-carnes.webp',
    alt: 'Seleção de carnes servidas no buffet',
    width: 778,
    height: 980,
  },
  {
    src: '/images/buffet-arroz.webp',
    alt: 'Opções de arroz servidas no buffet',
    width: 774,
    height: 978,
  },
]

const menuInspirations = [
  {
    name: 'Tradicional',
    description: 'Sabores conhecidos, com aquele cuidado de comida de casa.',
    items: [
      'Carnes de gado, porco e salsichão',
      'Arroz',
      'Polenta frita ou batata frita',
      'Maionese e variedade de saladas',
    ],
  },
  {
    name: 'Clássico',
    description: 'Uma combinação completa para celebrações especiais.',
    items: [
      'Gado, porco e galeto',
      'Arroz e massa com molho',
      'Polenta frita ou cuca',
      'Saladas, frutas da época e abacaxi assado',
    ],
  },
  {
    name: 'Premium',
    description: 'Mais variedade para uma experiência gastronômica marcante.',
    items: [
      'Picanha, entrecot, maminha, porco e galeto',
      'Arroz tradicional e arroz à grega',
      'Nhoque, lasanha, purê e strogonoff',
      'Saladas, frutas da época e farofa',
    ],
  },
]

const serviceHighlights = [
  {
    number: '01',
    title: 'Proposta personalizada',
    text: 'O formato do serviço e as opções são alinhados ao perfil da sua celebração.',
  },
  {
    number: '02',
    title: 'Preparo cuidadoso',
    text: 'Comida saborosa, apresentação caprichada e atenção em cada detalhe.',
  },
  {
    number: '03',
    title: 'Atendimento no evento',
    text: 'Uma equipe próxima e atenta à apresentação e à reposição dos alimentos.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Conte sobre seu evento',
    text: 'Compartilhe a data, o tipo de celebração e o que você imagina.',
  },
  {
    number: '02',
    title: 'Receba uma proposta',
    text: 'As opções são organizadas de acordo com as necessidades do evento.',
  },
  {
    number: '03',
    title: 'Defina os detalhes',
    text: 'Alinhe o cardápio e os pontos importantes antes da celebração.',
  },
  {
    number: '04',
    title: 'Aproveite o momento',
    text: 'No grande dia, curta seus convidados enquanto o buffet cuida do serviço.',
  },
]

const faqItems = [
  {
    question: 'Quais cidades vocês atendem?',
    answer:
      'A região de atendimento ainda precisa ser confirmada. Informe o local do seu evento pelo WhatsApp para consultar a disponibilidade.',
    pending: true,
  },
  {
    question: 'Qual é o número mínimo de convidados?',
    answer:
      'O número mínimo ainda não foi informado. Envie a quantidade estimada de convidados para receber uma orientação.',
    pending: true,
  },
  {
    question: 'O serviço inclui equipe de atendimento?',
    answer:
      'A composição da equipe pode variar conforme o formato do evento. Os profissionais incluídos serão detalhados na proposta.',
    pending: true,
  },
  {
    question: 'É possível personalizar o cardápio?',
    answer:
      'O atendimento é personalizado e as opções são alinhadas ao perfil do evento. Consulte as possibilidades disponíveis para a sua data.',
  },
  {
    question: 'Há opções para restrições alimentares?',
    answer:
      'Essa disponibilidade precisa ser confirmada conforme a restrição e o cardápio desejado. Informe as necessidades ao solicitar a proposta.',
    pending: true,
  },
  {
    question: 'Com quanto tempo de antecedência devo reservar?',
    answer:
      'A antecedência recomendada ainda precisa ser confirmada e pode depender da data. Consulte a agenda assim que definir o evento.',
    pending: true,
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'As condições de pagamento serão apresentadas junto com a proposta personalizada.',
    pending: true,
  },
]

function getWhatsappUrl(message = whatsappMessage) {
  return `https://wa.me/555199966951?text=${encodeURIComponent(message)}`
}

function WhatsAppLink({
  children,
  className = '',
  message = whatsappMessage,
  ...props
}) {
  return (
    <a
      className={className}
      href={getWhatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa com o Buffet Divino pelo WhatsApp"
      {...props}
    >
      {children}
    </a>
  )
}

function SectionLink({
  children,
  className = '',
  target,
  onClick,
  ...props
}) {
  const handleClick = (event) => {
    event.preventDefault()
    onClick?.(event)

    document.getElementById(target)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}`,
    )
  }

  return (
    <a className={className} href="/" onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pageReady, setPageReady] = useState(false)
  const [showFloatingWhatsapp, setShowFloatingWhatsapp] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}${window.location.search}`,
      )
    }
  }, [])

  useEffect(() => {
    let secondFrame
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => setPageReady(true))
    })

    return () => {
      window.cancelAnimationFrame(firstFrame)
      window.cancelAnimationFrame(secondFrame)
    }
  }, [])

  useEffect(() => {
    const revealSelectors = [
      '.about-section .section-label',
      '.about-content > .section-kicker',
      '.about-content > h2',
      '.about-lead',
      '.values-grid article',
      '.service-section .section-label',
      '.service-heading > *',
      '.service-grid article',
      '.service-note',
      '.process-heading > *',
      '.process-grid article',
      '.menu-heading > *',
      '.menu-inspirations-heading > *',
      '.menu-inspirations-grid article',
      '.menu-inspirations-footer',
      '.gallery figure',
      '.testimonials-section .section-label',
      '.testimonials-heading > *',
      '.testimonial-carousel',
      '.faq-section .section-label',
      '.faq-content > .section-kicker',
      '.faq-content > h2',
      '.faq-item',
      '.cta-copy > *',
      '.cta-image',
      '.site-footer > *',
    ]

    const revealItems = [
      ...document.querySelectorAll(revealSelectors.join(',')),
    ]
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    revealItems.forEach((item, index) => {
      item.classList.add('reveal-on-scroll')
      item.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`)

      if (
        item.matches('.gallery figure, .cta-image') ||
        item.closest('.menu-inspirations-grid')
      ) {
        item.classList.add('reveal-scale')
      }
    })

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-revealed'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -9% 0px',
        threshold: 0.08,
      },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    const handleEscape = (event) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  useEffect(() => {
    const visibleCtas = new Set()
    const observedCtas = document.querySelectorAll('.inline-whatsapp-cta')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleCtas.add(entry.target)
          } else {
            visibleCtas.delete(entry.target)
          }
        })

        setShowFloatingWhatsapp(visibleCtas.size === 0)
      },
      { threshold: 0.2 },
    )

    observedCtas.forEach((cta) => observer.observe(cta))

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`site-shell ${pageReady ? 'is-ready' : ''}`}>
      <header className="site-header">
        <SectionLink className="brand" target="inicio" onClick={closeMenu}>
          <span className="brand-mark">
            <img
              src="/images/logo-buffet-divino.png"
              alt=""
              width="576"
              height="586"
            />
          </span>
          <span>
            <strong>Buffet</strong>
            <small>divino</small>
          </span>
        </SectionLink>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`navigation ${menuOpen ? 'is-open' : ''}`}
          id="main-navigation"
          aria-label="Navegação principal"
        >
          <SectionLink target="sobre" onClick={closeMenu}>
            Sobre
          </SectionLink>
          <SectionLink target="cardapio" onClick={closeMenu}>
            Nosso buffet
          </SectionLink>
          <SectionLink target="depoimentos" onClick={closeMenu}>
            Depoimentos
          </SectionLink>
          <SectionLink target="duvidas" onClick={closeMenu}>
            Dúvidas
          </SectionLink>
          <WhatsAppLink className="nav-cta" onClick={closeMenu}>
            Pedir orçamento
          </WhatsAppLink>
        </nav>

        {menuOpen && (
          <button
            className="menu-backdrop"
            type="button"
            aria-label="Fechar menu"
            onClick={closeMenu}
          />
        )}
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Seu evento, do seu jeito</p>
            <h1>
              Sabores que ficam <em>na memória.</em>
            </h1>
            <p className="hero-description">
              Comida de verdade, atendimento próximo e cada detalhe preparado
              com carinho para celebrar os seus melhores momentos.
            </p>
            <div className="hero-actions">
              <WhatsAppLink className="button button-primary inline-whatsapp-cta">
                Solicitar orçamento pelo WhatsApp
                <span aria-hidden="true">↗</span>
              </WhatsAppLink>
              <SectionLink className="text-link" target="cardapio">
                Conheça nosso trabalho
                <span aria-hidden="true">↓</span>
              </SectionLink>
            </div>
            <div className="hero-proof">
              <div className="avatars" aria-hidden="true">
                <span>G</span>
                <span>S</span>
                <span>A</span>
              </div>
              <p>
                <strong>Clientes que recomendam</strong>
                <span>Casamentos, formaturas e celebrações</span>
              </p>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Pratos preparados pelo Buffet Divino"
          >
            <div className="hero-image hero-image-main">
              <img
                src="/images/buffet-saladas.webp"
                alt="Mesa colorida com saladas e acompanhamentos"
                width="810"
                height="974"
                fetchPriority="high"
              />
            </div>
            <div className="hero-image hero-image-secondary">
              <img
                src="/images/buffet-carnes.webp"
                alt="Carnes preparadas e servidas no buffet"
                width="778"
                height="980"
              />
            </div>
          </div>
        </section>

        <nav className="marquee" aria-label="Tipos de evento atendidos">
          <div className="marquee-track">
            {[false, true].map((isDuplicate) => (
              <div
                className="marquee-group"
                aria-hidden={isDuplicate || undefined}
                key={isDuplicate ? 'duplicate' : 'original'}
              >
                {eventTypes.map((event) => (
                  <span
                    className="event-link-group"
                    key={`${isDuplicate ? 'duplicate-' : ''}${event.label}`}
                  >
                    <WhatsAppLink
                      message={`Olá! Gostaria de solicitar um orçamento para ${event.subject}.`}
                      tabIndex={isDuplicate ? -1 : undefined}
                    >
                      {event.label}
                    </WhatsAppLink>
                    <i aria-hidden="true">✦</i>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </nav>

        <section className="section about-section" id="sobre">
          <div className="section-label">
            <span>01</span>
            <p>O Buffet Divino</p>
          </div>
          <div className="about-content">
            <p className="section-kicker">Mais do que servir</p>
            <h2>Cuidamos do seu evento como se fosse nosso.</h2>
            <p className="about-lead">
              Cada celebração é única. Por isso, unimos sabor de casa,
              apresentação cuidadosa e um atendimento flexível para criar uma
              experiência que combina com você e com seus convidados.
            </p>
            <div className="values-grid">
              <article>
                <span>01</span>
                <h3>Cardápio com identidade</h3>
                <p>Opções pensadas para o estilo e o momento do seu evento.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Atendimento próximo</h3>
                <p>Escuta, flexibilidade e cuidado em todas as etapas.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Serviço impecável</h3>
                <p>Apresentação, reposição e sabor do início ao fim.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="service-section" id="servicos">
          <div className="section-label">
            <span>02</span>
            <p>Na sua proposta</p>
          </div>
          <div className="service-content">
            <div className="service-heading">
              <div>
                <p className="section-kicker">Cuidado em cada etapa</p>
                <h2>Uma experiência pensada para o seu evento.</h2>
              </div>
              <p>
                Cada proposta é personalizada. Os itens e a estrutura incluídos
                são definidos de acordo com o formato da celebração.
              </p>
            </div>
            <div className="service-grid">
              {serviceHighlights.map((service) => (
                <article key={service.number}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
            <p className="service-note">
              Louças, utensílios e outros itens de estrutura devem ser
              confirmados na proposta.
            </p>
          </div>
        </section>

        <section className="process-section" id="como-funciona">
          <div className="process-heading">
            <div className="section-label light">
              <span>03</span>
              <p>Como funciona</p>
            </div>
            <div>
              <p className="section-kicker">Do primeiro contato ao evento</p>
              <h2>Um caminho simples para celebrar com tranquilidade.</h2>
            </div>
          </div>
          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="menu-showcase" id="cardapio">
          <div className="section menu-heading">
            <div className="section-label light">
              <span>04</span>
              <p>Nosso buffet</p>
            </div>
            <div>
              <p className="section-kicker">Comida que acolhe</p>
              <h2>Uma mesa bonita. Um sabor inesquecível.</h2>
            </div>
            <p>
              Dos acompanhamentos às carnes, cada preparo valoriza ingredientes,
              frescor e aquele sabor que faz todo mundo querer repetir.
            </p>
          </div>

          <div className="menu-inspirations">
            <div className="menu-inspirations-heading">
              <div>
                <p className="section-kicker">Inspirações de cardápio</p>
                <h3>Combinações para diferentes estilos de evento.</h3>
              </div>
              <p>
                Uma prévia das possibilidades disponíveis. O cardápio final é
                alinhado de acordo com o formato da sua celebração.
              </p>
            </div>

            <div className="menu-inspirations-grid">
              {menuInspirations.map((menu) => (
                <article key={menu.name}>
                  <p className="menu-type">Cardápio</p>
                  <h4>{menu.name}</h4>
                  <p className="menu-description">{menu.description}</p>
                  <ul>
                    {menu.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="menu-inspirations-footer">
              <p>
                Itens, substituições e disponibilidade são confirmados na
                proposta personalizada.
              </p>
              <WhatsAppLink
                className="button menu-button"
                message="Olá! Gostaria de conhecer as opções de cardápio para o meu evento."
              >
                Montar meu cardápio
                <span aria-hidden="true">↗</span>
              </WhatsAppLink>
            </div>
          </div>

          <div className="gallery" aria-label="Galeria de pratos do Buffet Divino">
            {gallery.map((image) => (
              <figure className={image.className || ''} key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="section testimonials-section" id="depoimentos">
          <div className="section-label">
            <span>05</span>
            <p>Quem já viveu</p>
          </div>
          <div className="testimonials-content">
            <div className="testimonials-heading">
              <div>
                <p className="section-kicker">Histórias reais</p>
                <h2>O carinho de quem já celebrou com a gente.</h2>
              </div>
              <p>Use as setas ou arraste para conhecer mais experiências.</p>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        <section className="faq-section" id="duvidas">
          <div className="section-label">
            <span>06</span>
            <p>Perguntas frequentes</p>
          </div>
          <div className="faq-content">
            <p className="section-kicker">Antes de pedir seu orçamento</p>
            <h2>Respostas para planejar o seu evento.</h2>
            <Faq items={faqItems} />
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-copy">
            <p className="section-kicker">Vamos celebrar?</p>
            <h2>Seu próximo momento especial começa aqui.</h2>
            <p>
              Conte sobre o seu evento e receba um atendimento personalizado
              diretamente pelo WhatsApp.
            </p>
            <WhatsAppLink className="button button-light inline-whatsapp-cta">
              Conversar no WhatsApp
              <span aria-hidden="true">↗</span>
            </WhatsAppLink>
          </div>
          <div className="cta-image">
            <img
              src="/images/buffet-prato-quente.webp"
              alt="Prato gratinado preparado pelo Buffet Divino"
              width="798"
              height="980"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <div>
            <strong>Buffet</strong>
            <span>divino</span>
          </div>
          <p>Sabores que celebram histórias.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <SectionLink target="sobre">Sobre</SectionLink>
          <SectionLink target="servicos">Serviços</SectionLink>
          <SectionLink target="cardapio">Nosso buffet</SectionLink>
          <SectionLink target="depoimentos">Depoimentos</SectionLink>
          <SectionLink target="duvidas">Dúvidas</SectionLink>
        </nav>
        <WhatsAppLink className="footer-contact inline-whatsapp-cta">
          <span>Orçamentos pelo WhatsApp</span>
          <strong>+55 51 9996-6951 ↗</strong>
        </WhatsAppLink>
        <p className="copyright">
          © {new Date().getFullYear()} Buffet Divino
        </p>
      </footer>

      <WhatsAppLink
        className={`floating-whatsapp ${
          showFloatingWhatsapp ? 'is-visible' : ''
        }`}
      >
        <FaWhatsapp aria-hidden="true" />
        <span className="visually-hidden">Solicitar orçamento</span>
      </WhatsAppLink>
      <Analytics />
    </div>
  )
}

export default App
