function calculateAge() {
  const dobInput = document.getElementById("dob");
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  const dob = new Date(dobInput.value);
  const today = new Date();

  // Reset messages
  resultDiv.textContent = '';
  errorDiv.textContent = '';

  // Validation
  if (!dobInput.value) {
    errorDiv.textContent = "⚠️ Please enter your date of birth.";
    return;
  }

  if (dob > today) {
    errorDiv.textContent = "⚠️ Date of birth can't be in the future.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.textContent = `🎉 You are ${years} years, ${months} months, and ${days} days old.`;
}
