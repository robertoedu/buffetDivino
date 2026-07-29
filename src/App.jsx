import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const whatsappMessage = 'Oi, quero fazer um orçamento para um evento'
const whatsappUrl = `https://wa.me/5551999333072?text=${encodeURIComponent(
  whatsappMessage,
)}`

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
    src: '/images/buffet-saladas.png',
    alt: 'Mesa de buffet com saladas, legumes e frutas',
    className: 'gallery-featured',
  },
  {
    src: '/images/buffet-acompanhamentos.png',
    alt: 'Acompanhamentos assados servidos no buffet',
  },
  {
    src: '/images/buffet-prato-quente.png',
    alt: 'Prato quente gratinado e acompanhamentos',
  },
  {
    src: '/images/buffet-carnes.png',
    alt: 'Seleção de carnes servidas no buffet',
  },
  {
    src: '/images/buffet-arroz.png',
    alt: 'Opções de arroz servidas no buffet',
  },
]

function WhatsAppLink({ children, className = '' }) {
  return (
    <a
      className={className}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa com o Buffet Divino pelo WhatsApp"
    >
      {children}
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-mark">
            <img src="/images/logo-buffet-divino.png" alt="" />
          </span>
          <span>
            <strong>Buffet</strong>
            <small>divino</small>
          </span>
        </a>

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
          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#cardapio" onClick={closeMenu}>
            Nosso buffet
          </a>
          <a href="#depoimentos" onClick={closeMenu}>
            Depoimentos
          </a>
          <WhatsAppLink className="nav-cta">Pedir orçamento</WhatsAppLink>
        </nav>
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
              <WhatsAppLink className="button button-primary">
                Solicitar orçamento
                <span aria-hidden="true">↗</span>
              </WhatsAppLink>
              <a className="text-link" href="#cardapio">
                Conheça nosso trabalho
                <span aria-hidden="true">↓</span>
              </a>
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

          <div className="hero-visual" aria-label="Pratos preparados pelo Buffet Divino">
            <div className="hero-image hero-image-main">
              <img
                src="/images/buffet-saladas.png"
                alt="Mesa colorida com saladas e acompanhamentos"
              />
            </div>
            <div className="hero-image hero-image-secondary">
              <img
                src="/images/buffet-carnes.png"
                alt="Carnes preparadas e servidas no buffet"
              />
            </div>
            <div className="hero-note">
              <span aria-hidden="true">✦</span>
              <p>
                <strong>Feito com carinho</strong>
                <small>do preparo ao serviço</small>
              </p>
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Tipos de evento atendidos">
          <div>
            <span>Casamentos</span>
            <i>✦</i>
            <span>Formaturas</span>
            <i>✦</i>
            <span>15 anos</span>
            <i>✦</i>
            <span>Batizados</span>
            <i>✦</i>
            <span>Confraternizações</span>
          </div>
        </section>

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

        <section className="menu-showcase" id="cardapio">
          <div className="section menu-heading">
            <div className="section-label light">
              <span>02</span>
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

          <div className="gallery" aria-label="Galeria de pratos do Buffet Divino">
            {gallery.map((image) => (
              <figure className={image.className || ''} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <section className="section testimonials-section" id="depoimentos">
          <div className="section-label">
            <span>03</span>
            <p>Quem já viveu</p>
          </div>
          <div className="testimonials-content">
            <div className="testimonials-heading">
              <div>
                <p className="section-kicker">Histórias reais</p>
                <h2>O carinho de quem já celebrou com a gente.</h2>
              </div>
              <p>Arraste para o lado e conheça mais experiências.</p>
            </div>

            <div className="testimonials-track">
              {testimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.name}>
                  <div className="stars" aria-label="5 estrelas">
                    ★ ★ ★ ★ ★
                  </div>
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <footer>
                    <span>{testimonial.name.charAt(0)}</span>
                    <p>
                      <strong>{testimonial.name}</strong>
                      <small>{testimonial.event}</small>
                    </p>
                  </footer>
                </article>
              ))}
            </div>
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
            <WhatsAppLink className="button button-light">
              Conversar no WhatsApp
              <span aria-hidden="true">↗</span>
            </WhatsAppLink>
          </div>
          <div className="cta-image">
            <img
              src="/images/buffet-prato-quente.png"
              alt="Prato gratinado preparado pelo Buffet Divino"
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
          <a href="#sobre">Sobre</a>
          <a href="#cardapio">Nosso buffet</a>
          <a href="#depoimentos">Depoimentos</a>
        </nav>
        <WhatsAppLink className="footer-contact">
          <span>Orçamentos pelo WhatsApp</span>
          <strong>(51) 99933-3072 ↗</strong>
        </WhatsAppLink>
        <p className="copyright">
          © {new Date().getFullYear()} Buffet Divino
        </p>
      </footer>

      <WhatsAppLink className="floating-whatsapp">
        <FaWhatsapp aria-hidden="true" />
        <span className="visually-hidden">Solicitar orçamento</span>
      </WhatsAppLink>
    </div>
  )
}

export default App
