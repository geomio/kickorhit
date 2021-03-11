$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    const faviortenumber = parseInt($("input#faviortenumber").val());
    const martialart = $("select#martialart").val();
    const upordown = $("select#upordown").val();
    const favcolor = $("select#favcolor").val();

    const answer = (80 - faviortenumber);

  if (favcolor === 'red') {
    answer += 1;
  }
  if (favcolor === 'blue') {
    answer += 2;
  }
  if (favcolor === 'yellow') {
    answer += 3;
  }
  if (favcolor === 'green') {
  answer += 4;
  }
  if (favcolor === 'purple') {
  answer += 5;
  }
  if (favcolor === 'orange') {
  answer += 6;
  }

  if (martialart === 'karate'){
    answer += 5;
  }
  if (martialart === 'tkd'){
    answer -= 5;
  }
  if (upordown === 'up'){
    answer += 3;
  }
  if (upordown === 'down'){
    answer -= 3;
  }

    event.preventDefault();
  });
});