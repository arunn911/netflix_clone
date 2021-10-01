const faqItemHeaders = document.querySelectorAll(".faq-item-header");

faqItemHeaders.forEach(faqItemHeader => {
  faqItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActivefaqItemHeader = document.querySelector(".faq-item-header.active");
    if(currentlyActivefaqItemHeader && currentlyActivefaqItemHeader!==faqItemHeader) {
      currentlyActivefaqItemHeader.classList.toggle("active");
      currentlyActivefaqItemHeader.style.background = "#303030";
      currentlyActivefaqItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    faqItemHeader.classList.toggle("active");
    const faqItemBody = faqItemHeader.nextElementSibling;
    if(faqItemHeader.classList.contains("active")) {
      faqItemHeader.style.background = "#d60505";
      faqItemBody.style.maxHeight = faqItemBody.scrollHeight + "px";
    }
    else {
      faqItemBody.style.maxHeight = 0;
      faqItemHeader.style.background = "#303030";
    }
    
  });
});