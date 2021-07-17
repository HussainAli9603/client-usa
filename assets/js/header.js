
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/


<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "publisher": {
        "@type": "Organization",
        "name": "Moby",
        "url": "https://www.moby.co/",
        "logo": {
            "@type": "ImageObject",
            "url": "https://moby.ghost.io/content/images/2021/05/moby-logo.svg"
        }
    },
    "url": "https://www.moby.co/",
    "image": {
        "@type": "ImageObject",
        "url": "https://static.ghost.org/v4.0.0/images/publication-cover.jpg",
        "width": 7183,
        "height": 2885
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.moby.co/"
    },
    "description": "Invest Like a Whale"
}
    </script>

