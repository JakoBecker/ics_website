function sendEmail() {
  var salutation = document.getElementById("inputGroupSelect01");
  var salutationString = salutation.options[salutation.selectedIndex].text;

  var name = document.getElementById("form-name").value;
  var surname = document.getElementById("form-surname").value;
  var email = document.getElementById("form-email").value;
  var contact = document.getElementById("form-contact").value;
  var country = document.getElementById("form-country").value;
  var company = document.getElementById("form-company").value;
  var query = document.getElementById("form-query").value;

  if (email == "") {
    swal.fire("Please provide an Email adress.");
  } else {
    Email.send({
      Host: "mail.icst.co.za",
      Username: "support@icst.co.za",
      Password: "Jbaekcok@123",
      To: "jakobus.becker@gmail.com",
      From: "support@icst.co.za",
      Subject: "Contact Request",
      Body:
        `<h1>Contact Details </h1><br/>
             <table style="border:1px solid black">
              <tr>
                  <th>Salutation</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Email</th>
                  <th>Contact No</th>
                  <th>Country</th>
                  <th>Company</th>
                  <th>Query</th>
              </tr>
             <tr>
                  <td style="width:10%; text-align:center">` +
        salutationString +
        `</td>
                  <td style="width:10%; text-align:center">` +
        name +
        `</td>
                  <td style="width:10%; text-align:center">` +
        surname +
        `</td>
                  <td style="width:10%; text-align:center">` +
        email +
        `</td>
        <td style="width:10%; text-align:center">` +
        contact +
        `</td>
        <td style="width:10%; text-align:center">` +
        country +
        `</td>
        <td style="width:10%; text-align:center">` +
        company +
        `</td>
        <td style="width:30%; text-align:center">` +
        query +
        `</td>
             </tr>
  
             </table>`,
    }).then((message) => swal.fire("Mail sent successfully"));
  }
}
