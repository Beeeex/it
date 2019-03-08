function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function warn_user(obj) {
	  var modal   = document.getElementById("modal");
	  var contact = document.getElementById("contact-form");
  
	  obj.disabled=true;
	  obj.value='Sending ...';
  
	  modal.style.display = "block";
	  contact.style.display = "none";
	  sleep(2000);
	  obj.form.submit();
  }
  
  /* from W3School */
  function openLanguage(evt, languageName) {
	  var i, tabcontent, tablinks;
  
	  tabcontent = document.getElementsByClassName("tabcontent");
	  for (i = 0; i < tabcontent.length; i++) {
		  tabcontent[i].style.display = "none";
	  }
  
	  tablinks = document.getElementsByClassName("tablinks");
	  for (i = 0; i < tablinks.length; i++) {
		  tablinks[i].className = tablinks[i].className.replace(" active", "");
	  }
  
	  document.getElementById(languageName).style.display = "block";
	  evt.currentTarget.className += " active";
  } /* from W3School */