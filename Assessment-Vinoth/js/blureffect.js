// blurEffect.js

$(document).ready(function () {
    // Function to show words with blur effect
    function showWords($contentItem) {
        const $words = $contentItem.find('.blur-word');
        let currentIndex = 0;

        function showNextWord() {
            if (currentIndex < $words.length) {
                $($words[currentIndex]).addClass('active');
                currentIndex++;
            } else {
                clearInterval(intervalId); // Stop the interval when all words are shown
            }
        }

        const intervalId = setInterval(showNextWord, 300);
    }

    // Reset words to initial state
    function resetWords($contentItem) {
        $contentItem.find('.blur-word').removeClass('active');
    }

    // Check if element is in viewport
    function isInViewport($element) {
        const elementTop = $element.offset().top;
        const elementBottom = elementTop + $element.outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    // Scroll event listener
    $(window).on('scroll', function () {
        $('.blur-effect-item').each(function () {
            const $contentItem = $(this);

            if (isInViewport($contentItem) && !$contentItem.hasClass('visible')) {
                $contentItem.addClass('visible');
                if (!$contentItem.closest('.empty-content').length) {
                    resetWords($contentItem); // Reset previous animation
                    showWords($contentItem); // Start animation
                }
            } else if (!isInViewport($contentItem)) {
                $contentItem.removeClass('visible');
                resetWords($contentItem); // Reset when out of view
            }
        });
    });

    // Trigger scroll event to check elements on load
    $(window).trigger('scroll');
});
