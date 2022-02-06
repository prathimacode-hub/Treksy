$(function() {

    $('#chkveg').multiselect({
      includeSelectAllOption: true
    });
  
    $('#btnget').click(function() {
      alert($('#chkveg').val());
    });
  });