
function combinations()
{
  var t = document.getElementById('name').value;
  console.log(t);
  var array1 = [];
    for (var x = 0, y=1; x < t.length; x++,y++)
    {
     array1[x]=t.substring(x, y);
      }
  var combi = [];
  var temp= "";
  var slent = Math.pow(2, array1.length);

  for (var i = 0; i < slent ; i++)
  {
      temp= "";
      for (var j=0;j<array1.length;j++) {
          if ((i & Math.pow(2,j))){
              temp += array1[j];
          }
      }
      if (temp !== "")
      {
          combi.push(temp);
      }
  }
  document.getElementById('result').innerHTML = combi.join("\n");
  }
