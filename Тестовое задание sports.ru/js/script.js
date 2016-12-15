$(document).ready(function(){                                      
  $.getJSON('seriea.json', {}, function(json){  
   $('.column').after('<thead class="head_table"><tr><td></td><td>Команда</td><td>М</td><td>В</td><td>Н</td>'
    +'<td>П</td><td>Заб</td><td>Проп</td><td>О</td></thead>');
   for(var i = 0; i <json.teams.length; i++ ) {                                            
    $('tbody').append('<tr><td>' + json.teams[i].place + '</td><td><div class="team_col"><i class="flag" title="'
     + json.teams[i].flag_country +'" alt="'+ json.teams[i].flag_country +'"></i><a class="team" href="'
     + json.teams[i].tag_url+'">' + json.teams[i].name + '</a></div></td><td>' + json.teams[i].matches + '</td><td>' 
     + json.teams[i].win +'</td><td>' + json.teams[i].draw + '</td><td>' 
     + json.teams[i].lose + '</td><td>' + json.teams[i].goals + '</td><td>'
     + json.teams[i].conceded_goals + '</td><td>' + json.teams[i].score + '</td></tr>');
    if(json.teams[i].color == '1') {
     $('.main_table tbody tr:last td:first').addClass('color1');   	
   }
   if(json.teams[i].color == '2') {
     $('.main_table tbody tr:last td:first').addClass('color2');   	
   }
   if(json.teams[i].color == '4') {
     $('.main_table tbody tr:last td:first').addClass('color4');   	
   }
 }; 
 $('.main_table').after('<div class="table_footer"><b>М</b> - матчи, <span><b>В</b> - выигрыши, <b>Н</b> - ничьи,'
  +' <b>П</b> - проигрыши,</span> <span><b>Заб</b> - забитые голы, <b>Проп</b> - пропущенные голы,</span>'
  +' <b>О</b> - очки в турнире</div>');     
});                
});