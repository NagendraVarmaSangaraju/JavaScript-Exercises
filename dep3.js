function luck()
{
  var t = document.getElementById('name').value;
  var n= Math.ceil(Math.random() * 10);
  if (n == t)
  {
    document.getElementById('result').innerHTML ="Lucky, You!"
  }
  else {
    document.getElementById('result').innerHTML = n+"   Try Again!"
  }
}
