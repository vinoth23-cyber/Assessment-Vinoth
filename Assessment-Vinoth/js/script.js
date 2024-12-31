$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-item');
    const totalItems = items.length;
  
    // Show the current item
    function showItem(index) {
      items.removeClass('active');
      $(items[index]).addClass('active');
    }
  
    // Next button functionality
    $('#next-btn').click(function() {
      currentIndex = (currentIndex + 1) % totalItems;
      showItem(currentIndex);
    });
  
    // Previous button functionality
    $('#prev-btn').click(function() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      showItem(currentIndex);
    });
  });
  