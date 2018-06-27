function makeGrid(){
        document.getElementById("pixelCanvas").innerHTML='';
        const height = document.getElementById("inputHeight").value;
        const width = document.getElementById("inputWidth").value;
        for(let x = 0; x < height; x++) {
          let table = document.getElementById("pixelCanvas");
          let row = table.insertRow();
            for (let z = 0; z < width; z++){
              let cell = row.insertCell();
            }
        }
    }
$("#sizePicker").on("submit", function(event){
  event.preventDefault();
  makeGrid();
})
$("#pixel_canvas").on('click', "td", function(){
  let color = $("#colorPicker").val();
  $(this).css("background-color", color);
})
/* http://code.jquery.com/jquery-1.11.1.min.js"></script>
