/**
 * Handles opening of and synchronization with the reveal.js
 * notes talker.
 *
 */
var RevealNotesSpeech = (function() {

  Reveal.addEventListener( 'ready', talkNotes );
  Reveal.addEventListener( 'slidechanged', talkNotes );
  var config = Reveal.getConfig();

  function talkNotes( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var notes = event.currentSlide.querySelector(".notes");
    if(notes) {
      var synthes = new SpeechSynthesisUtterance(notes.innerHTML);
      if (config.lang){
          synthes.lang = config.lang;
      }
      speechSynthesis.speak( synthes );
    }
  }


})();