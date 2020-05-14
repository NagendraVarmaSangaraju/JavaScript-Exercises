function cap()
{
  var t = document.getElementById('name').value;
  str = t.split(" ");

  for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

    document.getElementById('result').innerHTML = str.join(" ");
}
