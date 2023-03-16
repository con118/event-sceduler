$(function () {
    const currentHour = new Date().getHours();
  
    // Apply past, present, or future class to each time-block
    $('.time-block').each(function() {
      const timeBlockHour = parseInt($(this).attr('id'));
  
      if (timeBlockHour < currentHour) {
        $(this).addClass('past');
      } else if (timeBlockHour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  
    // Get user input and save to local storage
    $('.save-btn').on('click', function() {
      const description = $(this).siblings('textarea').val();
      const timeBlockId = $(this).closest('.time-block').attr('id');
      localStorage.setItem(timeBlockId, description);
    });
  
    // Get user input from local storage and set values of corresponding textarea elements
    $('.time-block').each(function() {
      const timeBlockId = $(this).attr('id');
      const savedDescription = localStorage.getItem(timeBlockId);
  
      if (savedDescription) {
        $(this).find('textarea').val(savedDescription);
      }
    });
  
    // Display current date in header
    const currentTime = dayjs().format('dddd, MMMM D');
    $('#current-date').text(currentTime);
  
  });
  
  // Add an event listener to div "mybtn" and listen to when the id is clicked
  document.getElementById("james", "james2").addEventListener("click", getlost);
  
  function getlost() {
    $("#james").alert("You got lost!");
  }
  
  // Display the current date in the "lead2" div
  function timediv(projecttime) {
    const formattedTime = dayjs().format('YYYY-MM-DD');
    $('#james2').text(formattedTime);
  }
  
  // Save user input to local storage
  function saveToLocalStorage() {
    const inputField = document.getElementById('inputField');
    const saveButton = document.getElementById('saveButton');
  
    saveButton.addEventListener('click', () => {
      const inputValue = inputField.value;
      localStorage.setItem('savedInput', inputValue);
    });
  }
  
  // Log a message to the console when the page is ready
  $(document).ready(function() {
    console.log("ready!");
  });
  