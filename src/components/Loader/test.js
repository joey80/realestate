const data = {
    index: 0,
    businessid: 153987456388593,
    api_key: 'azohJ6zv4wENCgihMqHS7820YKKHE7Vg'
};

// Get all of the 5 star rated reviews that have content > 300 chars,
// sort them by date and return the latest 3 reviews
const getSortedReviews = raw => {
  const sortedReviews = raw.filter(elm => {
    if (elm.comments !== null && elm.comments.length > 300 && elm.rating > 4) {
      return elm;
    }
  });

  sortedReviews.sort((a, b) => {
    const dateA = new Date(a.reviewDate);
    const dateB = new Date(b.reviewDate);
    return dateB - dateA;
  });

  return sortedReviews.slice(0, 3);
};

// Build a DOM node of reviews to append to the page
const buildDOMElements = array => {
    let strReviews = '';
    let name = '';
      
    array.forEach(elm => {
        if (elm.reviewer.nickName === null ? name = `${elm.reviewer.firstName} ${elm.reviewer.lastName}` : name = elm.reviewer.nickName);
        strReviews += `
        <div class="review">
            <div class="review_box">
                <div class="name">
                ${name}
                </div>
                <div class="stars--rating">
                    <div class="stars">
                    <i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>
                    </div>
                </div>
                <div class="comments">
                    ${truncate(elm.comments)}
                </div>
            </div>
        </div>`;
    });

    return strReviews;
};

const truncate = string => {
    if (string.length > 300) {
      return string.substring(0, 300) + '...';
    } else {
      return string;
    }
};

$(document).ready(function() {
  	const arr = ["All"];
    const req = {"sources": arr};
    $.ajax({
      method: "POST",
      dataType: 'json',
      headers: {"content-type": "application/json"},
      data: JSON.stringify(req),
      url: "https://api.birdeye.com/resources/v1/review/businessId/" + data.businessid + "/?api_key=" + data.api_key + "&op=15&sindex=" + data.index + "&count=20"
    })
    .done(function(response) {
        console.log('test');
        const cleanArray = getSortedReviews(response);
        const DOMElements = buildDOMElements(cleanArray);
          
        $(".revcontent").append(DOMElements);
        $(".revcontent").addClass("loaded");
    });
});