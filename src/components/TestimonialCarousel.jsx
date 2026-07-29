import { useEffect, useMemo, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function getCardsPerPage() {
  if (window.innerWidth <= 780) return 1
  if (window.innerWidth <= 1150) return 2
  return 3
}

function TestimonialCarousel({ testimonials }) {
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage)
  const [currentPage, setCurrentPage] = useState(0)
  const touchStart = useRef(null)

  useEffect(() => {
    const updateCardsPerPage = () => setCardsPerPage(getCardsPerPage())

    window.addEventListener('resize', updateCardsPerPage)
    return () => window.removeEventListener('resize', updateCardsPerPage)
  }, [])

  const pages = useMemo(() => {
    const groupedTestimonials = []

    for (let index = 0; index < testimonials.length; index += cardsPerPage) {
      groupedTestimonials.push(
        testimonials.slice(index, index + cardsPerPage),
      )
    }

    return groupedTestimonials
  }, [cardsPerPage, testimonials])

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, Math.max(pages.length - 1, 0)))
  }, [pages.length])

  const goToPage = (page) => {
    const lastPage = pages.length - 1
    setCurrentPage(Math.min(Math.max(page, 0), lastPage))
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goToPage(currentPage - 1)
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goToPage(currentPage + 1)
    }
  }

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return

    const distance = touchStart.current - event.changedTouches[0].clientX

    if (Math.abs(distance) > 45) {
      goToPage(currentPage + (distance > 0 ? 1 : -1))
    }

    touchStart.current = null
  }

  return (
    <div className="testimonial-carousel">
      <div
        className="testimonials-viewport"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Depoimentos de clientes"
        tabIndex="0"
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="testimonials-track"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((pageTestimonials, pageIndex) => (
            <div
              className="testimonial-page"
              style={{ '--cards-per-page': cardsPerPage }}
              aria-hidden={pageIndex !== currentPage}
              inert={pageIndex !== currentPage}
              key={pageTestimonials[0].name}
            >
              {pageTestimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.name}>
                  <div className="stars" aria-label="5 estrelas">
                    ★ ★ ★ ★ ★
                  </div>
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <footer>
                    <span aria-hidden="true">
                      {testimonial.name.charAt(0)}
                    </span>
                    <p>
                      <strong>{testimonial.name}</strong>
                      <small>{testimonial.event}</small>
                    </p>
                  </footer>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-navigation">
        <div className="carousel-buttons">
          <button
            type="button"
            aria-label="Ver depoimentos anteriores"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
          >
            <FaArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Ver próximos depoimentos"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === pages.length - 1}
          >
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>

        <div className="carousel-indicators" aria-label="Páginas de depoimentos">
          {pages.map((page, pageIndex) => (
            <button
              className={pageIndex === currentPage ? 'is-active' : ''}
              type="button"
              aria-label={`Ir para a página ${pageIndex + 1}`}
              aria-current={pageIndex === currentPage ? 'true' : undefined}
              onClick={() => goToPage(pageIndex)}
              key={page[0].name}
            />
          ))}
        </div>
      </div>

      <p className="visually-hidden" aria-live="polite">
        Página {currentPage + 1} de {pages.length}
      </p>
    </div>
  )
}

export default TestimonialCarousel
