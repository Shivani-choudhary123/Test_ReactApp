import React from 'react'

export default function AboutUs() {
  return (
    <>
    <h2>About Us</h2>
    <div className ="container">
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
  <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <strong>Text Case Converter</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Convert your text to different cases, including uppercase, lowercase, title case, or sentence case. Useful for ensuring consistent formatting in your writing.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <strong>Word Counter</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Quickly counts the number of words, characters, or paragraphs in your text. Helps in keeping track of writing limits, such as for essays or social media posts.</div>
    </div>
  </div>
</div>
</div>
</>
  )
}
