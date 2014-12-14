'use strict';

angular.module('wingedwords.directives', ['wingedwords.services'])
  .directive('composer', function() {
    return {
      restrict: "E",
      scope: {
          field: "="
      },
      templateUrl: "templates/composer.html",
      link: function(scope, elem, attrs) {
        scope.$watch('field', function() {

          //----- TEXTAREA - display on separate panel  --------//

          // var poemText = $('#poem').val().replace( /\n/g, '<br \\>' ); // get poem
          // var lineArray = poemText.split("<br \\>"); // break into array of lines
          // //console.log(lineArray)
          // var formattedArray = []
          // lineArray.forEach(function(line, index) { 
          //   var totalSyllables = lineSyllablesCount(line); // count syllables
          //   //line = jQuery.parseHTML("<div>" + line + "</div>")
          //   //console.log(line)
          //   if (totalSyllables == 5) { //style lines with 5 or 7 syllables
          //     line = "<span style='color:MediumVioletRed ;'>" + line + "</span><br>"
          //   } else if (totalSyllables == 7) {
          //     line = "<span style='color:deepskyblue;'>" + line + "</span><br>"
          //   } else if (totalSyllables == 10) {
          //     line = "<span style='color:Orchid;'>" + line + "</span><br>"
          //   } else {
          //     line = "<span style='color:grey;'>" + line + "</span><br>"
          //   }
          //   //line = index + 1 + " " + line // add line numbers
          //   formattedArray.push(line);
          // }); 
          // var poemFormatted = formattedArray.join(" ");
          // // console.log(lineArray.join(" "))
          // $('#poemText').html(poemFormatted); //output formatted poem

          // function countWordSyllables(word) {
          //   word = word.toLowerCase();
          //   if(word.length <= 3) { return 1; }
          //   word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
          //   word = word.replace(/^y/, '');
          //   if (word.match(/[aeiouy]{1,2}/g).length) {
          //     return word.match(/[aeiouy]{1,2}/g).length;  
          //   }
          // }

          // function lineSyllablesCount(line) {
          //   var line = line.split(/\s+/);
          //   var totalSyllables = 0
          //   line.forEach(function(word) { //count sylables per word
          //     if (word.length > 0) {
          //       totalSyllables += countWordSyllables(word) // add up syllables to count per line  
          //     }
          //   });
          //   return totalSyllables
          // }

          // function countLineIndexSyllables(line, index) {
          //   var line = line.split(/\s+/);
          //   var totalSyllables = 0
          //   line.forEach(function(word) { //count sylables per word
          //     if (word.length > 0) {
          //       totalSyllables += countWordSyllables(word) // add up syllables to count per line  
          //     }
          //   });
          //   if (totalSyllables == 5) { //style lines with 5 or 7 syllables
          //     console.log(index)
          //     $('#poem div:nth-child(' + index + ')').css('color', 'blue');
          //   } else if (totalSyllables == 7) {
          //     $('#poem div:nth-child(' + index + ')').css('color', 'green');
          //   } else if (totalSyllables == 10) {
          //     $('#poem div:nth-child(' + index + ')').css('color', 'gold');
          //   } 
          // }

          //----- TEXTAREA --------//

          // $scope.arrayOfLines = [
          //   line1: {sylable_count: 1, text: "blah"},
          //   line2: {sylable_count: 1, text: "blah"}
          // ]
          var arrayOfLines = scope.field.split(/\r?\n/); // split into separate lines
          console.log(arrayOfLines)
          var $content;
          var $word = 0;
          var $syllable_count = "";
          var $result = "";
          for (var i = 0; i < arrayOfLines.length; i++) {
            $content = arrayOfLines[i].toLowerCase();
            var word = $content.length;
            // if we have content, find the syllables
            if($content.length > 0) {
              word = ($content.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
                .replace(/^y/, '')
                .match(/[aeiouy]/g) || 'a').length; // handle word with no vowels
              if ($content.length <= 3) {
                word = 1;
              }
            }

            if (word !== 0) {
              $syllable_count = word.toString();
              $result = $result + $syllable_count + "\n";
            } else {
              $result = $result + "0 \n";
            }
            console.log($result)
          }
        })
      }
    }
  });