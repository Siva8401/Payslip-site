let employees = [];

fetch('employees.json')
  .then(response => response.json())
  .then(data => {
    employees = data;
    const select = document.getElementById("employeeSelect");
    employees.forEach((emp, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = emp.name;
      select.appendChild(option);
    });
  });

document.getElementById("employeeSelect").addEventListener("change", () => {
  document.getElementById("passwordInput").style.display = "block";
  document.getElementById("submitBtn").style.display = "block";
});

document.getElementById("submitBtn").addEventListener("click", () => {
  const index = document.getElementById("employeeSelect").value;
  const enteredPassword = document.getElementById("passwordInput").value;

  if (!employees[index]) return;

  if (employees[index].password === enteredPassword) {
    const emp = employees[index];
    const payslipDiv = document.getElementById("payslip");
    payslipDiv.style.display = "block";

    payslipDiv.innerHTML = `
      <h3>Payslip for ${emp.name}</h3>
      <p><strong>Region:</strong> ${emp.region}</p>
      <p><strong>State:</strong> ${emp.state}</p>
      <p><strong>Project:</strong> ${emp.project}</p>
      <p><strong>Date of Joining:</strong> ${emp.doj}</p>
      <p><strong>Date of Confirmation:</strong> ${emp.doc}</p>
      <p><strong>Appraisal Due:</strong> ${emp.appraisalDue}</p>
      <p><strong>CTC:</strong> ₹${emp.ctc}</p>
      <p><strong>Take Home:</strong> ₹${emp.takeHome}</p>
      <p><strong>Gross Salary:</strong> ₹${emp.grossSalary}</p>
      <p><strong>Net Salary:</strong> ₹${emp.netSalary}</p>
      <p><strong>Deductions:</strong> PT: ₹${emp.pt}, ESI: ₹${emp.esi}, IT/INS: ₹${emp.it_ins}</p>
      <p><strong>Total Deductions:</strong> ₹${emp.deductions}</p>
      <p><strong>Final Take Home:</strong> ₹${emp.finalTakeHome}</p>
      <p><strong>Medical Insurance:</strong> ₹${emp.medicalInsurance}</p>
      <p><strong>PA Insurance:</strong> ₹${emp.paInsurance}</p>
      <p><strong>Bonus/Leave Salary:</strong> ₹${emp.bonusLeaveSalary}</p>
    `;
  } else {
    alert("Incorrect password. Please try again.");
  }
});
