function toggleLanguages() {
  var boxThai = document.querySelector('.box-language-thai');

  if(boxThai.classList.contains('active')) {
    boxThai.classList.remove('active');
  } else {
    boxThai.classList.add('active');
      var containerLanguageList = document.querySelectorAll('.menu-all-account-logout, .container-search');
      containerLanguageList.forEach(function(containerSearch) {
      if (containerSearch.classList.contains('active')) {
        containerSearch.classList.remove('active');
      }
    });
  }
}

function toggleLogin() {
  var containerlogin = document.querySelector('.menu-all-account-logout');

  if (containerlogin.classList.contains('active')) {
      containerlogin.classList.remove('active');
  } else {
      containerlogin.classList.add('active');
      var containerSearchList = document.querySelectorAll('.container-search, .box-language-thai');
      containerSearchList.forEach(function(containerSearch) {
      if (containerSearch.classList.contains('active')) {
        containerSearch.classList.remove('active');
      }
    });
  }
}

function toggleSearchForm() {
  var containerSearchList = document.querySelectorAll('.container-search');
  var upArrowIcon = document.querySelectorAll('.bx.bxs-up-arrow');

  containerSearchList.forEach(function(containerSearch) {
      if (containerSearch.classList.contains('active')) {
          containerSearch.classList.remove('active');
      } else {
          containerSearch.classList.add('active');
          var containerlogin = document.querySelector('.menu-all-account-logout');
          var boxlanguagethai = document.querySelector('.box-language-thai');
          if (containerlogin.classList.contains('active')) {
            containerlogin.classList.remove('active');
          }
          if (boxlanguagethai.classList.contains('active')) {
            boxlanguagethai.classList.remove('active');
          }
      }
  });

  if (upArrowIcon.style.display === 'none') {
      upArrowIcon.style.display = 'block';
  } else {
      upArrowIcon.style.display = 'none';
  }
}

function toggleAccordionContent(index) {
  var content = document.getElementById('content-' + index);
  var isActive = content.style.display === 'black';

  var accordionContents = document.querySelectorAll('.accordion-content');
  accordionContents.forEach(function (contentItem) {
    contentItem.style.display = 'none';
  });

  var accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(function (headerItem) {
    headerItem.classList.remove('active');
  });

  if (!isActive) {
    content.style.display = 'flex';
    var activeHeader = document.getElementById('header-' + index);
    activeHeader.classList.add('active');
  }

  var accordionItems = document.getElementsByClassName("accordion-item-text");

    for (var i = 0; i < accordionItems.length; i++) {
        accordionItems[i].classList.remove("active");
    }

    accordionItems[index].classList.add("active");
}

window.addEventListener('DOMContentLoaded', function() {
  var initialContent = document.querySelector('.accordion-content');
  initialContent.style.display = 'flex';
  
  var accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(function(header) {
    header.addEventListener('click', function() {
      var isActive = header.classList.contains('disabled');
      
      if (isActive) {
        accordionContents.forEach(function(contentItem) {
          contentItem.style.display = 'none';
        });
        
        header.classList.remove('disabled');
      } 
      else {
        accordionHeaders.forEach(function(headerItem) {
          headerItem.classList.add('disabled');
        });
        
        accordionContents.forEach(function(contentItem) {
          contentItem.style.display = 'none';
        });
        
        header.classList.remove('disabled');
        var content = document.getElementById('content-' + index);
        content.style.display = 'flex';
      }
    });
  });
});

window.addEventListener('DOMContentLoaded', function() {
  var initialContent = document.getElementById('content-0');
  initialContent.style.display = 'flex';
  
});

function changeVideo(videoUrl, element) {
  var videoPlayer = document.getElementById('videoPlayer');
  var currentVideoUrl = videoPlayer.src;
  videoPlayer.src = videoUrl;
  videoPlayer.load();

  var videoPreviews = document.getElementsByClassName('videoPreview');
  for (var i = 0; i < videoPreviews.length; i++) {
    videoPreviews[i].classList.remove('active');
  }

  element.classList.add('active');

  if (currentVideoUrl !== videoUrl) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.right = "0px";
}

function closeNav() {
  document.getElementById("mySidenav").style.right = "-500px";
}