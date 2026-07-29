import { FaChevronDown } from 'react-icons/fa'

function Faq({ items }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>
            <h3>{item.question}</h3>
            <FaChevronDown aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            {item.pending && (
              <span className="pending-label">Informação a confirmar</span>
            )}
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}

export default Faq
