var myFile = "";
var tab = {};
var tab_test = {};
var input = document.querySelector("input");
var turn = "X";
var prevTurn;
var nbTurn = 1;
var emptyCell = 0;
var grille = new Array();
    grille[0]=new Array()
    grille[0][1] = "";
    grille[0][2] = "";
    grille[1]=new Array()
    grille[1][1] = "";
    grille[1][2] = "";
    grille[2]=new Array()
    grille[2][1] = "";
    grille[2][2] = "";

      function printGrid(grille){
        //Impression d'un tableau pour visualiser les resultats
        document.write("<table style=\"font-size:150%;background-color: #78bec5;border-radius: 14px;height: 240px;margin: 5px;width:240px;\">");
        document.write("<tr>");
        document.write("<td align=\"center\" style=\"border-bottom:2px solid white;border-right:2px solid white\">"+ grille[0][0] +"</td>");
        document.write("<td align=\"center\" style=\"border-bottom:2px solid white\">"+ grille[0][1] +"</td>");
        document.write("<td align=\"center\" style=\"border-bottom:2px solid white;border-left:2px solid white\">"+ grille[0][2] +"</td>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<td align=\"center\" style=\"border-bottom:2px solid white;border-right:2px solid white\">"+ grille[1][0] +"</td>");
        document.write("<td align=\"center\" style=\"border-bottom:2px solid white\">"+ grille[1][1] + "</td>");
        document.write("<td align=\"center\" style=\"border-bottom:2px solid white;border-left:2px solid white\">"+ grille[1][2] + "</td>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<td align=\"center\" style=\"border-right:2px solid white\">" + grille[2][0]+"</td>");
        document.write("<td align=\"center\">"+ grille[2][1]+"</td>");
        document.write("<td align=\"center\" style=\"border-left:2px solid white\">"+ grille[2][2]+"</td>");
        document.write("</tr>");
        document.write("</table>");
      };

    function checkVictory(grille, checkPlayer){
      // Affichage de la grille
      printGrid(grille);
      // Calcul des coups gagnants
      if(grille[0][0] == checkPlayer && grille[0][1] == checkPlayer && grille[0][2] == checkPlayer){
        return true;
      } else if (grille[1][0] == checkPlayer && grille[1][1] == checkPlayer && grille[1][2] == checkPlayer){
        return true;
      } else if (grille[2][0] == checkPlayer && grille[2][1] == checkPlayer && grille[2][2] == checkPlayer){
        return true;
      } else if (grille[0][0] ==  checkPlayer && grille[1][0] == checkPlayer && grille[2][0] == checkPlayer){
        return true;
      } else if (grille[0][1] == checkPlayer && grille[1][1] == checkPlayer && grille[2][1] == checkPlayer){
        return true;
      } else if (grille[0][2] == checkPlayer && grille[1][2] == checkPlayer && grille[2][2] == checkPlayer){
        return true;
      } else if (grille[0][0] == checkPlayer && grille[1][1] == checkPlayer && grille[2][2] == checkPlayer){
        return true;
      } else if (grille[0][2] == checkPlayer && grille[1][1] == checkPlayer && grille[2][0] == checkPlayer){
        return true;
      } else {
        return false;
      }
    };
