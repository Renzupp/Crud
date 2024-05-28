var rollV, fnameV, mnameV, addressV, emailV, snameV;

function readFom() {
  rollV = document.getElementById("roll").value;
  fnameV = document.getElementById("fname").value;
  nmameV = document.getElementById("mname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  snameV = document.getElementById("sname").value;
  Swal.fire("Data Read Succesfully!");
  console.log(rollV, fnameV, addressV, mnameV, snameV, emailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      fname: fnameV,
      mname: mnameV,
      address: addressV,
      email: emailV,
      sname: snameV,
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("sname").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("fname").value = snap.val().fname;
      document.getElementById("mname").value = snap.val().mname;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
      document.getElementById("sname").value = snap.val().sname;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      fname: fnameV,
      mname: mnameV,
      address: addressV,
      email: emailV,
      sname: snameV,
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("sname").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
    Swal.fire("Data Deleted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("sname").value = "";
};