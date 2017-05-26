$(document).ready(function() {
  $("#butt").click(function(event) {
    var url = "http://localhost:3000/api/v1/contacts"
    $.get(url, function(data) {
      const headers = `<tr><th>Contacts</th></tr>`
      const dataList = `${data.map(r => '<tr><td>' + "<a href='#' id=" + r.id + " class='deats'>" + r.name + '</a>' + '</td></tr>').join('')}`
      document.getElementById('table').innerHTML = (headers + dataList)
    });
  });



  $("body").on("click", "a.deats", function() {
    var arrayId = (this.id)-1
    var url = "http://localhost:3000/api/v1/contacts"
    $.get(url, function(data) {
      const person = data[arrayId]
      const headers = `<tr><th>${data[arrayId].nickname}</th></tr>`
      const info = `<tr><td><img src="images/${person.id}.jpg" alt="profile" style="width:100px;height:100px;"></td></tr>`
      document.getElementById('table').innerHTML = (headers + info)
    });
  });

  // <tr><td>hello </td></tr>




});
