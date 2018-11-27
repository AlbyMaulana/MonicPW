function functionName() {
  var x=document.formulirpop['NAMA'].value;
  var y=document.formulirpop['ALAMAT'].value;
  var z=document.formulirpop['PEMESANAN'].value;
  var a=document.formulirpop['PEMBAYARAN'].value;

  var table = document.getElementById('tableinput');
  var row = table.insertRow(1);
  var cell1 = row.insertRow(0);
  var cell2 = row.insertRow(1);
  var cell3 = row.insertRow(2);
  var cell4 = row.insertRow(3);

  cell1.innerHTML = x;
  cell1.innerHTML = y;
  cell1.innerHTML = z;
  cell1.innerHTML = a;


}
